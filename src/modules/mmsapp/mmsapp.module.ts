/*
 * @Author: allin.zhang
 * @Date: 2022-04-06 17:57:38
 * @LastEditTime: 2022-04-07 09:55:14
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/mmsapp/mmsapp.module.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MmsAppEntity } from './entities/mmsapp.entity';
import { MmsAppController } from './mmsapp.controller';
import { MmsAppService } from './mmsapp.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([MmsAppEntity])],
  controllers: [MmsAppController],
  providers: [MmsAppService, ConfigService],
})
export class MmsAppModule {}
