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
  Req,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags, ApiParam } from '@nestjs/swagger';

import { UnitOrderDetailService } from 'src/unit-order-detail/unit-order-detail.service';
import { CreateUnitOrderDetailDto } from 'src/unit-order-detail/dto/create-unit-order-detail.dto';
import { UnitOrderDetailSerializer } from 'src/unit-order-detail/serializer/unit-order-detail.serializer';
import { Pagination } from 'src/paginate';

import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { UnitOrderDetailFilterDto } from './dto/unit-order-detail-filter.dto';
import { UpdateUnitOrderDetailDto } from './dto/update-unit-order-detail.dto';
import { PermissionGuard } from 'src/common/guard/permission.guard';

@ApiTags(':uoId/Unit-Order-Detail')
//@UseGuards(JwtTwoFactorGuard)
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller(':uoId/unit-order-detail')
export class UnitOrderDetailController {
  constructor(
    private readonly unitOrderDetailService: UnitOrderDetailService
  ) {}

  @Post()
  @ApiParam({
    name: 'uoId',
    type: 'String',
    required: true
  })
  create(
    @Req()
    req: Request,
    @Body()
    createUnitOrderDetailDto: CreateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    const userInfo = req.user;
    createUnitOrderDetailDto.created_by = userInfo;
    req.params.id = req.params.uoId;
    delete req.params.uoId;
    createUnitOrderDetailDto.Unit_order_id = req.params;
    // if (userInfo.hasOwnProperty('name')) {
    //   createUnitOrderDto.created_by = userInfo['name'];
    // }

    return this.unitOrderDetailService.create(createUnitOrderDetailDto);
  }

  @Get()
  findAllUnitOrderDetail(
    @Query()
    unitOrderDetailFilterDto: UnitOrderDetailFilterDto
  ): Promise<Pagination<UnitOrderDetailSerializer>> {
    return this.unitOrderDetailService.findAll(unitOrderDetailFilterDto);
  }

  @Get(':id')
  findOneUnitOrder(
    @Param('id')
    id: string
  ): Promise<UnitOrderDetailSerializer> {
    return this.unitOrderDetailService.findOne(+id);
  }

  @Put(':id')
  update(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateUnitOrderDetailDto: UpdateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    const userInfo = req.user;
    updateUnitOrderDetailDto.updated_by = userInfo;

    updateUnitOrderDetailDto.updatedAt = new Date();
    return this.unitOrderDetailService.update(+id, updateUnitOrderDetailDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeUnitOrderDetail(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.unitOrderDetailService.remove(+id);
  }
}
