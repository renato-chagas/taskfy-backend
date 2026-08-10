import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { WorldsModule } from './worlds/worlds.module';
import { PollsModule } from './polls/polls.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AuthModule,
    WorldsModule,
    TasksModule,
    CategoriesModule,
    PollsModule,
  ],
})
export class AppModule {}
