import {
  IsBoolean, // <-- Não esqueça de adicionar este import
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { TaskPriority, TaskStatus } from '../../generated/prisma/enums';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title!: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  // --- Novos campos adicionados ---

  @IsString()
  @IsNotEmpty()
  worldId!: string;

  @IsString()
  @IsOptional()
  assigneeId?: string;

  @IsBoolean()
  @IsOptional()
  hasResources?: boolean;

  @IsString()
  @IsOptional()
  resources?: string;
}
