/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 22:50:05
 * @LastEditTime: 2022-04-07 10:14:29
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/mmsapp/entities/mmsapp.entity.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({ name: 'mms_app' })
export class MmsAppEntity {
  constructor() {
    this.appid = '';
    this.name = '';
    this.type = 0;
    this.deleted = false;
    this.remark = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: 'appId', length: 255 })
  appid: string;

  @Column({ comment: '类型(0微信公众号1微信小程序', default: () => 0 })
  type: number;

  @Column({ comment: '应用名称', length: 255 })
  name: string;

  @Column({ type: 'tinyint', comment: '是否删除(1删除)', default: () => 0 })
  deleted: boolean;

  @Column({ name: 'create_user', comment: '创建用户' })
  createUser: string;

  @Column({
    name: 'create_time',
    type: 'timestamp',
    comment: '创建时间',
    default: () => 'current_timestamp',
  })
  create_time: Timestamp | string;

  @Column({ name: 'update_user', comment: '更新用户' })
  updateUser: string;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    comment: '更新时间',
    onUpdate: 'current_timestamp',
    default: () => 'current_timestamp',
  })
  updateTime: Timestamp | string;

  @Column({ comment: '备注', nullable: true })
  remark: string;
}
