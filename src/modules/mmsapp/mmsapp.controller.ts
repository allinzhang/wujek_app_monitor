/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 17:15:28
 * @LastEditTime: 2022-04-07 10:15:37
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/mmsapp/mmsapp.controller.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Request,
} from '@nestjs/common';
// import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { MmsAppService } from './mmsapp.service';
import { CreateMmsAppDto } from './dto/create-mmsapp.dto';
import { MmsAppEntity } from './entities/mmsapp.entity';

import { dto2entity } from '../../utils/util';

// import { AuthGuard } from '@nestjs/passport';
@ApiTags('应用')
@Controller('mmsApp')
export class MmsAppController {
  constructor(private readonly mssAppService: MmsAppService) {}

  // 新增
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() mmsAppDto: CreateMmsAppDto) {
    // console.log('procreate', projectDto)
    const mmsApp: MmsAppEntity = new MmsAppEntity();
    dto2entity(mmsAppDto, mmsApp);
    mmsApp.createUser = '0';
    mmsApp.updateUser = '0';
    return this.mssAppService.create(mmsApp);
  }
  // 修改
  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Request() req,
    @Param('id') id: string,
    @Body() mmsAppDto: CreateMmsAppDto,
  ) {
    const mmsApp: MmsAppEntity = new MmsAppEntity();
    dto2entity(mmsAppDto, mmsApp);
    // project.userId = req.user.userId;
    // project.updateUser = req.user.userId;
    return this.mssAppService.update(id, mmsApp);
  }
  // 删除
  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Request() req, @Param('id') id: string) {
    return this.mssAppService.delete(id);
  }
  // 详情
  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  find(@Request() req, @Param('id') id: string) {
    return this.mssAppService.find(id);
  }
  // 列表
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    const list = await this.mssAppService.findAll(req.user.userId);
    return {
      code: 200,
      data: list,
    };
  }
}
