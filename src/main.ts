/*
 * @Author: allin.zhang
 * @Date: 2022-04-06 15:39:38
 * @LastEditTime: 2022-04-06 15:57:12
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('前端多项目监控')
    .setDescription('日志监控、错误监控、白屏监控、加载时间、pv')
    .setVersion('1.0')
    // .addTag('Frontend')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
