import { Module } from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { WorldsController } from './worlds.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  providers: [WorldsService],
  controllers: [WorldsController],
})
export class WorldsModule {}
