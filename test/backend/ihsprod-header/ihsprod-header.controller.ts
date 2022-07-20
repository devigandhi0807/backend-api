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
  Query,
  UseGuards
} from '@nestjs/common';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { Pagination } from 'src/paginate';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { IHSProdHeaderService } from './ihsprod-header.service';
import { CreateIHSProdHeaderDto } from './dto/create-ihsprod-header.dto';
import { IHSProdHeaderSerializer } from './serializer/ihsprod-header.serializer';
import { IHSProdHeaderFilterDto } from './dto/ihsprod-header.filter.dto';
import { UpdateIHSProdHeaderDto } from './dto/update-ihsprod-header.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { PermissionGuard } from 'src/common/guard/permission.guard';

@ApiTags('IHS-Prod-Header')
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller('ihs-prod-header')
export class IHSProdHeaderController {
  constructor(private readonly ihsProdHeaderService: IHSProdHeaderService) {}

  @Post()
  create(
    @GetUser()
    userInfo: UserEntity,
    @Body()
    createIHSProdHeaderDto: CreateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    createIHSProdHeaderDto.created_by = userInfo;
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
  update(
    @GetUser()
    userInfo: UserEntity,
    @Param('id')
    id: string,
    @Body()
    updateIHSProdHeaderDto: UpdateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    updateIHSProdHeaderDto.updated_by = userInfo;
    updateIHSProdHeaderDto.updatedAt = new Date();
    return this.ihsProdHeaderService.update(+id, updateIHSProdHeaderDto);
  }

  @Get(':id')
  findOneProdHeader(
    @Param('id')
    id: string
  ): Promise<IHSProdHeaderSerializer> {
    return this.ihsProdHeaderService.findOne(+id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeProdHeader(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsProdHeaderService.remove(+id);
  }
}
