import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createTaskDto: CreateTaskDto) {
    // Agora o createTaskDto deve conter o worldId e pode conter assigneeId, hasResources, etc.
    const { categoryId, worldId, assigneeId, ...taskData } = createTaskDto as any;

    // 1. Verifica se o usuário faz parte do mundo
    const isMember = await this.prisma.worldMember.findUnique({
      where: {
        userId_worldId: { userId, worldId },
      },
    });

    if (!isMember) {
      throw new ForbiddenException('Você não tem permissão para criar tarefas neste mundo.');
    }

    // 2. Verifica a categoria
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    // 3. Cria a tarefa conectando todas as relações
    return this.prisma.task.create({
      data: {
        ...taskData,
        world: {
          connect: { id: worldId },
        },
        category: {
          connect: { id: categoryId },
        },
        ...(assigneeId && {
          assignee: {
            connect: { id: assigneeId },
          },
        }),
      },
      include: {
        category: true,
        assignee: {
          select: { id: true, nickname: true },
        },
      },
    });
  }

  // O findAll agora recebe o mundo para separar as colunas do Kanban
  async findAllByWorld(worldId: string) {
    if (!worldId) {
      throw new ForbiddenException('O ID do mundo é obrigatório para listar as tarefas.');
    }

    return this.prisma.task.findMany({
      where: { worldId },
      include: {
        category: true,
        assignee: {
          select: { id: true, nickname: true },
        },
      },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'desc' },
      ],
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        category: true,
        assignee: {
          select: { id: true, nickname: true },
        },
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada.');
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id); // Garante que existe

    const { categoryId, assigneeId, ...taskData } = updateTaskDto as any;

    if (categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        throw new NotFoundException('Categoria não encontrada.');
      }
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        ...taskData,
        ...(categoryId && {
          category: {
            connect: { id: categoryId },
          },
        }),
        // Se mandou um assigneeId, atualiza. Se mandou null, desconecta.
        ...(assigneeId !== undefined && {
          assignee: assigneeId 
            ? { connect: { id: assigneeId } } 
            : { disconnect: true },
        }),
      },
      include: {
        category: true,
        assignee: {
          select: { id: true, nickname: true },
        },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.task.delete({
      where: { id },
    });
  }
}