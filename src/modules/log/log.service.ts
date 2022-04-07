/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 17:33:19
 * @LastEditTime: 2022-04-07 11:55:24
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/log/log.service.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, getRepository } from 'typeorm';
import { AppLogEntity } from './entities/log.entity';

@Injectable()
export class AppLogService {
  constructor(
    @InjectRepository(AppLogEntity)
    private readonly appLogRepository: Repository<AppLogEntity>,
    private connection: Connection,
  ) {}

  async find(id: string): Promise<AppLogEntity> {
    // return await this.appLogRepository.findOne(+id);
    return null;
  }

  // async checkUsername(username: string): Promise<AppLogEntity> {
  //   const checkUser = await this.appLogRepository.findOne({
  //     where: {
  //       // username
  //     },
  //   });
  //   if (checkUser) {
  //     return checkUser;
  //   }
  //   return null;
  // }

  async findAll(): Promise<AppLogEntity[]> {
    return await this.appLogRepository.find({
      where: {
        // userId,
      },
    });
  }

  async create(users: AppLogEntity): Promise<AppLogEntity> {
    return await this.appLogRepository.save(users);
  }

  async delete(id: string) {
    return await this.appLogRepository.delete(id);
  }

  async update(id: string, appLog: AppLogEntity) {
    // users.updateUser = '10001';
    return await this.appLogRepository.update(+id, appLog);
  }
}
