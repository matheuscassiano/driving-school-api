import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Driving School API')
    .setDescription(
      'System for managing classes in a driving school for "Projeto Integrador"',
    )
    .setVersion('1.0')
    .addTag('driving-school')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(env.PORT || 3000);
}
bootstrap();
