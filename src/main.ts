import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // 1. Novo import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Taskfy API')
    .setDescription('API para gerenciar as tarefas do nosso mundo Vanilla')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  // Sua configuração de CORS mantida intacta
  const allowedOrigins = [
    'http://localhost:5173',
    'https://taskfy-frontend-rho.vercel.app',
  ];

  app.enableCors({
    origin: allowedOrigins,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
