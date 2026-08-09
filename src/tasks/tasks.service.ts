import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const { categoryId, ...taskData } = createTaskDto;

    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException(
        'Categoria não encontrada.',
      );
    }

    return this.prisma.task.create({
      data: {
        ...taskData,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
      include: {
        category: true,
      },
    });
  }

  async findAll() {
    return this.prisma.task.findMany({
      include: {
        category: true,
      },
      orderBy: [
        {
          priority: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });

    if (!task) {
      throw new NotFoundException(
        'Tarefa não encontrada.',
      );
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);

    const { categoryId, ...taskData } = updateTaskDto;

    if (categoryId) {
      const category = await this.prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      });

      if (!category) {
        throw new NotFoundException(
          'Categoria não encontrada.',
        );
      }
    }

    return this.prisma.task.update({
      where: {
        id,
      },
      data: {
        ...taskData,
        ...(categoryId && {
          category: {
            connect: {
              id: categoryId,
            },
          },
        }),
      },
      include: {
        category: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}