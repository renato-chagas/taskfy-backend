import {
  Injectable,
  NotFoundException,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class WorldsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserWorlds(userId: string) {
    return this.prisma.world.findMany({
      where: {
        members: {
          some: { userId },
        },
      },
      include: {
        _count: {
          select: { members: true, tasks: true },
        },
      },
    });
  }

  async createWorld(userId: string, name: string) {
    return this.prisma.world.create({
      data: {
        name: name,
        ownerId: userId, // Define o criador do mundo
        members: {
          create: {
            userId: userId,
            role: Role.OWNER, // Atribui cargo supremo ao criador
          },
        },
      },
    });
  }

  async joinWorld(userId: string, inviteCode: string) {
    const world = await this.prisma.world.findUnique({
      where: { inviteCode },
    });

    if (!world) {
      throw new NotFoundException(
        'Código de convite inválido ou mundo não existe.',
      );
    }

    // Verifica se o usuário está banido deste mundo
    const isBanned = await this.prisma.worldBan.findUnique({
      where: {
        userId_worldId: {
          userId,
          worldId: world.id,
        },
      },
    });

    if (isBanned) {
      throw new ForbiddenException('Você foi banido deste mundo e não pode entrar.');
    }

    const existingMember = await this.prisma.worldMember.findUnique({
      where: {
        userId_worldId: {
          userId,
          worldId: world.id,
        },
      },
    });

    if (existingMember) {
      throw new ConflictException('Você já é um membro deste mundo.');
    }

    await this.prisma.worldMember.create({
      data: {
        userId,
        worldId: world.id,
        role: Role.MEMBER,
      },
    });

    return { message: `Bem-vindo ao mundo ${world.name}!`, worldId: world.id };
  }

  async getWorldDetails(worldId: string, userId: string) {
    const world = await this.prisma.world.findFirst({
      where: {
        id: worldId,
        members: { some: { userId } },
      },
      include: {
        members: {
          include: { user: { select: { id: true, nickname: true } } },
        },
        categories: true,
      },
    });

    if (!world) {
      throw new NotFoundException(
        'Mundo não encontrado ou você não tem acesso.',
      );
    }

    return world;
  }

  async deleteWorld(worldId: string, userId: string) {
    const world = await this.prisma.world.findUnique({
      where: { id: worldId },
    });
    if (!world) throw new NotFoundException('Mundo não encontrado.');

    if (world.ownerId !== userId) {
      throw new ForbiddenException(
        'Apenas o criador pode excluir este servidor.',
      );
    }

    return this.prisma.world.delete({ where: { id: worldId } });
  }

  async updateMemberRole(
    worldId: string,
    targetUserId: string,
    newRole: Role,
    requesterId: string,
  ) {
    // Verifica se o solicitante é ADMIN ou OWNER
    const requester = await this.prisma.worldMember.findUnique({
      where: { userId_worldId: { userId: requesterId, worldId } },
    });

    if (
      !requester ||
      (requester.role !== Role.OWNER && requester.role !== Role.ADMIN)
    ) {
      throw new ForbiddenException(
        'Você não tem permissão para alterar cargos.',
      );
    }

    return this.prisma.worldMember.update({
      where: { userId_worldId: { userId: targetUserId, worldId } },
      data: { role: newRole },
    });
  }

  async kickMember(worldId: string, targetUserId: string, requesterId: string) {
    const requester = await this.prisma.worldMember.findUnique({
      where: { userId_worldId: { userId: requesterId, worldId } },
    });

    if (
      !requester ||
      (requester.role !== Role.OWNER && requester.role !== Role.ADMIN)
    ) {
      throw new ForbiddenException('Você não tem permissão para expulsar membros.');
    }

    return this.prisma.worldMember.delete({
      where: { userId_worldId: { userId: targetUserId, worldId } },
    });
  }

  async banMember(worldId: string, targetUserId: string, requesterId: string) {
    const requester = await this.prisma.worldMember.findUnique({
      where: { userId_worldId: { userId: requesterId, worldId } },
    });

    if (
      !requester ||
      (requester.role !== Role.OWNER && requester.role !== Role.ADMIN)
    ) {
      throw new ForbiddenException('Você não tem permissão para banir membros.');
    }

    // Remove dos membros e adiciona na tabela de banidos
    await this.prisma.worldMember.delete({
      where: { userId_worldId: { userId: targetUserId, worldId } },
    }).catch(() => {});

    return this.prisma.worldBan.create({
      data: {
        userId: targetUserId,
        worldId,
      },
    });
  }

  async unbanMember(worldId: string, targetUserId: string, requesterId: string) {
    const requester = await this.prisma.worldMember.findUnique({
      where: { userId_worldId: { userId: requesterId, worldId } },
    });

    if (
      !requester ||
      (requester.role !== Role.OWNER && requester.role !== Role.ADMIN && requester.role !== Role.MODERATOR)
    ) {
      throw new ForbiddenException('Você não tem permissão para desbanir membros.');
    }

    return this.prisma.worldBan.delete({
      where: { userId_worldId: { userId: targetUserId, worldId } },
    });
  }

  async getBannedMembers(worldId: string, requesterId: string) {
    const requester = await this.prisma.worldMember.findUnique({
      where: { userId_worldId: { userId: requesterId, worldId } },
    });

    if (
      !requester ||
      (requester.role !== Role.OWNER && requester.role !== Role.ADMIN && requester.role !== Role.MODERATOR)
    ) {
      throw new ForbiddenException('Você não tem permissão para ver os banidos.');
    }

    return this.prisma.worldBan.findMany({
      where: { worldId },
      include: { user: { select: { id: true, nickname: true } } },
    });
  }
}