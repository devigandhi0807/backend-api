import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Query,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { Pagination } from 'src/paginate';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { IHSProdHeaderService } from './ihsprod-header.service';
import { CreateIHSProdHeaderDto } from './dto/create-ihsprod-header.dto';
import { IHSProdHeaderSerializer } from './serializer/ihsprod-header.serializer';
import { IHSProdHeaderFilterDto } from './dto/ihsprod-header.filter.dto';
import { UpdateIHSProdHeaderDto } from './dto/update-ihsprod-header.dto';

@ApiTags('IHS-Prod-Header')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ihsprod-header')
export class IHSProdHeaderController {
  constructor(private readonly ihsProdHeaderService: IHSProdHeaderService) {}

  @Post('/new-prod-header')
  createNewProdHeader(
    @Req()
    req: Request,
    @Body()
    createIHSProdHeaderDto: CreateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    const userInfo = req.user;
    createIHSProdHeaderDto.user = userInfo;

    if (userInfo.hasOwnProperty('name')) {
      createIHSProdHeaderDto.created_by = userInfo['name'];
    }
    return this.ihsProdHeaderService.create(createIHSProdHeaderDto);
  }

  @Get()
  findAllProdHeader(
    @Query()
    prodHeaderDto: IHSProdHeaderFilterDto
  ): Promise<Pagination<IHSProdHeaderSerializer>> {
    return this.ihsProdHeaderService.findAll(prodHeaderDto);
  }

  @Put(':id')
  updateProdHeader(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSProdHeaderDto: UpdateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    const userInfo = req.user;
    updateIHSProdHeaderDto.user = userInfo;
    if (userInfo.hasOwnProperty('name')) {
      updateIHSProdHeaderDto.updated_by = userInfo['name'];
    }
    updateIHSProdHeaderDto.updatedAt = new Date();
    return this.ihsProdHeaderService.update(+id, updateIHSProdHeaderDto);
  }

  @Get('/prod/:id')
  findOneProdHeader(
    @Param('id')
    id: string
  ): Promise<IHSProdHeaderSerializer> {
    return this.ihsProdHeaderService.findOne(+id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeProdHeader(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsProdHeaderService.remove(+id);
  }
}
