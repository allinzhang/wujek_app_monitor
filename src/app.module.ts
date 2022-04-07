/*
 * @Author: allin.zhang
 * @Date: 2022-04-06 15:39:38
 * @LastEditTime: 2022-04-07 09:57:07
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/app.module.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

import { MmsAppModule } from './modules/mmsapp/mmsapp.module';
import { AppLogModule } from './modules/log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          logging: config.get('DB_LOGGING'),
          synchronize: config.get('DB_SYNC'),
          entities: [join(__dirname, '/', '**/**.entity{.ts,.js}')],
          timezone: '+08:00',
        };
      },
      inject: [ConfigService],
    }),
    MmsAppModule,
    AppLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
