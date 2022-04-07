/*
 * @Author: allin.zhang
 * @Date: 2022-04-06 17:57:38
 * @LastEditTime: 2022-04-06 18:03:37
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/log/log.module.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppLogEntity } from './entities/log.entity';
import { AppLogController } from './log.controller';
import { AppLogService } from './log.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([AppLogEntity])],
  controllers: [AppLogController],
  providers: [AppLogService, ConfigService],
})
export class AppLogModule {}
