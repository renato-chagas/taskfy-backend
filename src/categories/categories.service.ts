import {
  ConflictException,
  Injectable,
  NotFoundException,
  ForbiddenException, // <-- Adicionado
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name, color, worldId } = createCategoryDto;

    // CORREÇÃO AQUI: Verifica se o nome existe apenas NESTE mundo
    const existingCategory = await this.prisma.category.findFirst({
      where: {
        name,
        worldId,
      },
    });

    if (existingCategory) {
      throw new ConflictException('Já existe uma categoria com esse nome neste mundo.');
    }

    return this.prisma.category.create({
      data: {
        name,
        color,
        world: {
          connect: { id: worldId },
        },
      },
    });
  }

  // Agora recebe o worldId para não misturar as categorias
  async findAll(worldId: string) {
    if (!worldId) {
      throw new ForbiddenException('O ID do mundo é obrigatório para listar as categorias.');
    }

    return this.prisma.category.findMany({
      where: { worldId },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id); // Já busca a categoria atual

    const { name, color, worldId } = updateCategoryDto as any;

    if (name) {
      const existingCategory = await this.prisma.category.findFirst({
        where: {
          name,
          worldId: category.worldId, // Usa o worldId da categoria atual
          NOT: {
            id,
          },
        },
      });

      if (existingCategory) {
        throw new ConflictException('Já existe uma categoria com esse nome neste mundo.');
      }
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name,
        color,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.category.delete({
      where: { id },
    });
  }
}