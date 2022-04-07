/*
 * @Author: your name
 * @Date: 2021-11-17 19:23:43
 * @LastEditTime: 2022-04-07 10:25:05
 * @LastEditors: allin.zhang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /app_monitor/src/modules/log/dto/create-log.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppLogDto {
  @ApiProperty({ description: '项目名' })
  appid: string;

  @ApiProperty({ description: '类型(0微信公众号1微信小程序' })
  type: string;

  @ApiProperty({ description: '日志名' })
  title: string;

  @ApiProperty({ description: '头部信息' })
  header: string;

  @ApiProperty({ description: '接口地址' })
  url: string;

  @ApiProperty({ description: '参数' })
  params: string;

  @ApiProperty({ description: '返回结果' })
  results: string;

  @ApiProperty({ description: 'ip' })
  ip: string;

  // @ApiProperty({ description: '插入时间戳' })
  // timestamp: string;
}
