import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
  Put,
  Get,
  Delete,
  HttpCode,
  HttpStatus,
  Query
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { IhsMonthProdService } from './ihs-month-prod.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateIHSMonthProdDto } from './dto/create-ihs-month-prod.dto';
import { Pagination } from 'src/paginate';
import { IHSMonthProdSerializer } from './serializer/ihs-month-prod.serializer';
import { UpdateIHSMonthProdDto } from './dto/update-ihs-month-prod.dto';

import { IHSMonthProdFilterDto } from './dto/ihs-month-prod-filter.dto';
@ApiTags('IHS-Month-Prod')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ihs-month-prod')
export class IhsMonthProdController {
  constructor(private readonly ihsMonthProdService: IhsMonthProdService) {}

  @Post('/new-month-prod')
  createNewMonthProd(
    @Req()
    req: Request,
    @Body()
    createIHSMonthProdDto: CreateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const userInfo: Object = req.user;
    createIHSMonthProdDto.user = userInfo;

    if (userInfo.hasOwnProperty('name')) {
      createIHSMonthProdDto.created_by = userInfo['name'];
    }
    return this.ihsMonthProdService.create(createIHSMonthProdDto);
  }

  @Get()
  findAllIHSLeaseVol(
    @Query()
    prodFilterDto: IHSMonthProdFilterDto
  ): Promise<Pagination<IHSMonthProdSerializer>> {
    return this.ihsMonthProdService.findAll(prodFilterDto);
  }

  @Put(':id')
  updateIHSMonthProd(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSMonthDto: UpdateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const userInfo: Object = req.user;
    updateIHSMonthDto.user = userInfo;
    if (userInfo.hasOwnProperty('name')) {
      updateIHSMonthDto.updated_by = userInfo['name'];
    }
    updateIHSMonthDto.updatedAt = new Date();
    return this.ihsMonthProdService.update(+id, updateIHSMonthDto);
  }

  @Get('/prod/:id')
  findOneIHSMonthProd(
    @Param('id')
    id: string
  ): Promise<IHSMonthProdSerializer> {
    return this.ihsMonthProdService.findOne(+id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeIHSMonthProd(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsMonthProdService.remove(+id);
  }
}
