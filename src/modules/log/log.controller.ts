/*
 * @Author: allin.zhang
 * @Date: 2021-10-28 17:15:28
 * @LastEditTime: 2022-04-07 10:18:12
 * @LastEditors: allin.zhang
 * @Description: 
 * @FilePath: /app_monitor/src/modules/log/log.controller.ts
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
import { AppLogService } from './log.service';
import { CreateAppLogDto } from './dto/create-log.dto';
import { AppLogEntity } from './entities/log.entity';

import { dto2entity } from '../../utils/util';

// import { AuthGuard } from '@nestjs/passport';

@ApiTags('应用日志')
@Controller('appLog')
export class AppLogController {
  constructor(private readonly appLogService: AppLogService) {}

  // 新增
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() appLogDto: CreateAppLogDto) {
    const appLog: AppLogEntity = new AppLogEntity();
    dto2entity(appLogDto, appLog);
    // appLog.createUser = "0";
    // appLog.updateUser = "0";
    return this.appLogService.create(appLog);
  }
  // 修改
  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Request() req,
    @Param('id') id: string,
    @Body() appLogDto: CreateAppLogDto,
  ) {
    const appLog: AppLogEntity = new AppLogEntity();
    dto2entity(appLogDto, appLog);
    // project.userId = req.user.userId;
    // project.updateUser = req.user.userId;
    return this.appLogService.update(id, appLog);
  }
  // 删除
  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Request() req, @Param('id') id: string) {
    return this.appLogService.delete(id);
  }
  // 详情
  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  find(@Request() req, @Param('id') id: string) {
    return this.appLogService.find(id);
  }
  // 列表
  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    const list = await this.appLogService.findAll(req.user.userId);
    return {
      code: 200,
      data: list,
    };
  }
}
