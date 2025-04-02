import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  app.enableCors({
    origin: 'http://localhost:5173'
  })

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('PokeEscale API')
    .setDescription('The PokeEscale API documentation')
    .setVersion('1.0')
    .addTag('pokemon')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0')
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
