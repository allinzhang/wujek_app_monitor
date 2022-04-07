/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 22:50:05
 * @LastEditTime: 2022-04-07 10:24:53
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/log/entities/log.entity.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity({ name: 'mms_app_log' })
export class AppLogEntity {
  constructor() {
    this.appid = '';
    this.type = 0;
    this.title = '';
    this.header = '';
    this.url = '';
    this.params = '';
    this.results = '';
    this.ip = '';
    // this.timestamp = 0;
    this.deleted = false;
    this.remark = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: 'appId', length: 255 })
  appid: string;

  @Column({ comment: '类型(0微信公众号1微信小程序', default: () => 0 })
  type: number;

  @Column({ comment: '日志名', length: 255 })
  title: string;

  @Column({ comment: '头部信息' })
  header: string;

  @Column({ comment: '接口地址' })
  url: string;

  @Column({ comment: '参数' })
  params: string;

  @Column({ comment: '返回结果' })
  results: string;

  @Column({ comment: 'ip', nullable: true })
  ip: string;

  // @Column({ comment: '插入时间戳', nullable: true })
  // timestamp: number;

  @Column({ type: 'tinyint', comment: '是否删除(1删除)', default: () => 0 })
  deleted: boolean;

  @Column({
    name: 'create_time',
    type: 'timestamp',
    comment: '创建时间',
    default: () => 'current_timestamp',
  })
  create_time: Timestamp | string;

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
