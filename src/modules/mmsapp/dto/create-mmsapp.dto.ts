/*
 * @Author: your name
 * @Date: 2021-11-17 19:23:43
 * @LastEditTime: 2022-04-07 09:46:59
 * @LastEditors: allin.zhang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /app_monitor/src/modules/mmsapp/dto/create-mmsapp.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateMmsAppDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ description: '应用id' })
  appid: string;

  @ApiProperty({ description: '类型(0微信公众号1微信小程序' })
  type: string;

  @ApiProperty({ description: '' })
  name: string;

}
