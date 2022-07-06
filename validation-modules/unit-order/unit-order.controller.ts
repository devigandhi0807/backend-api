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

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { UnitOrderService } from 'src/unit-order/unit-order.service';
import { CreateUnitOrderDto } from 'src/unit-order/dto/create-unit-order.dto';
import { UnitOrderSerializer } from 'src/unit-order/serializer/unit-order.serializer';
import { Pagination } from 'src/paginate';
import { PermissionGuard } from 'src/common/guard/permission.guard';
//import JwtTwoFactorGuard from 'src/common/guard/jwt-two-factor.guard';

import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { UnitOrderFilterDto } from './dto/unit-order-filter.dto';
import { UpdateUnitOrderDto } from './dto/update-unit-order.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { UserEntity } from 'src/auth/entity/user.entity';

@ApiTags('Unit-Order')
//@UseGuards(JwtTwoFactorGuard)
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller('unit-order')
export class UnitOrderController {
  constructor(private readonly unitOrderService: UnitOrderService) {}

  @Post()
  create(
    @GetUser()
    userInfo: UserEntity,
    @Body()
    createUnitOrderDto: CreateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    createUnitOrderDto.created_by = userInfo;
    return this.unitOrderService.create(createUnitOrderDto);
  }

  @Get()
  findAll(
    @Query()
    unitFilterDto: UnitOrderFilterDto
  ): Promise<Pagination<UnitOrderSerializer>> {
    return this.unitOrderService.findAll(unitFilterDto);
  }
  @Get(':id/count')
  unitOrderDetailsCount(
    @Param('id')
    id: string
  ): Promise<UnitOrderSerializer> {
    return this.unitOrderService.unitOrderDetailsCount(+id);
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string
  ): Promise<UnitOrderSerializer> {
    return this.unitOrderService.findOne(+id);
  }

  @Put(':id')
  update(
    @GetUser()
    userInfo: UserEntity,
    @Param('id')
    id: string,
    @Body()
    updateUnitOrderDto: UpdateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    updateUnitOrderDto.updated_by = userInfo;
    updateUnitOrderDto.updatedAt = new Date();
    return this.unitOrderService.update(+id, updateUnitOrderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeUnitOrder(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.unitOrderService.remove(+id);
  }
}
