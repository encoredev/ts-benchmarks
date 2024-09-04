const start = process.hrtime.bigint()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    const listenTime = process.hrtime.bigint();
    console.log("server started up in ", listenTime - start, "ns");
  });
}
bootstrap();
