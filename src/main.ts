import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  //#region swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('VzLa Facturación Digital - example')
    .setDescription('VzLa facturación digital (G.C.I.) API description')
    .setVersion('1.0.0')
    .addTag('')
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'Bearer',
      in: 'Header',
      name: 'Authorization',
      scheme: 'Bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/documentation', app, document);
  //#endregion swagger

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
