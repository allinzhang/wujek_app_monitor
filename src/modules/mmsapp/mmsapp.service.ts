/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 17:33:19
 * @LastEditTime: 2022-04-07 10:14:03
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/mmsapp/mmsapp.service.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, getRepository } from 'typeorm';
import { MmsAppEntity } from './entities/mmsapp.entity';

@Injectable()
export class MmsAppService {
  constructor(
    @InjectRepository(MmsAppEntity)
    private readonly mmsAppRepository: Repository<MmsAppEntity>,
    private connection: Connection,
  ) {}

  async find(id: string): Promise<MmsAppEntity> {
    // return await this.mmsAppRepository.findOne(+id);
    return null;
  }

  // async checkUsername(username: string): Promise<MmsAppEntity> {
  //   const checkUser = await this.mmsAppRepository.findOne({
  //     where: {
  //       // username
  //     },
  //   });
  //   if (checkUser) {
  //     return checkUser;
  //   }
  //   return null;
  // }

  async findAll(userId: number): Promise<MmsAppEntity[]> {
    return await this.mmsAppRepository.find({
      where: {
        // userId,
      },
    });
  }

  async create(mmsApp: MmsAppEntity): Promise<MmsAppEntity> {
    return await this.mmsAppRepository.save(mmsApp);
  }

  async delete(id: string) {
    return await this.mmsAppRepository.delete(id);
  }

  async update(id: string, mmsApp: MmsAppEntity) {
    // users.updateUser = '10001';
    return await this.mmsAppRepository.update(+id, mmsApp);
  }
}
