import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan-body';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './utils/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger();
  (morgan as any)(app.getHttpAdapter().getInstance(), {
    stream: {
      write: (message: string) => {
        logger.log(message.replace('\n', ''));
        return true;
      }
    }
  })

  app.useGlobalPipes(new ValidationPipe());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const config = new DocumentBuilder().setTitle('harry potter API docs').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/harry_potter_API_docs', app, document, { swaggerOptions: { tagsSorter: 'alpha', operationsSorter: 'alpha' } });
  await app.listen(process.env.PORT);
}

bootstrap();
