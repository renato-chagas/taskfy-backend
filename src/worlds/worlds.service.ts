import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho conforme sua pasta

@Injectable()
export class WorldsService {
  
  // Injeção de dependência do seu serviço global
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
        name,
        members: {
          create: {
            userId: userId,
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
      throw new NotFoundException('Código de convite inválido ou mundo não existe.');
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
      },
    });

    return { message: `Bem-vindo ao mundo ${world.name}!`, worldId: world.id };
  }

  async getWorldDetails(worldId: string, userId: string) {
    const world = await this.prisma.world.findFirst({
      where: {
        id: worldId,
        members: { some: { userId } }
      },
      include: {
        members: {
          include: { user: { select: { id: true, nickname: true } } }
        },
        categories: true,
      }
    });

    if (!world) {
      throw new NotFoundException('Mundo não encontrado ou você não tem acesso.');
    }

    return world;
  }
}