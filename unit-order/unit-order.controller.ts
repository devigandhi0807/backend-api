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
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';

import { UnitOrderService } from 'src/unit-order/unit-order.service';
import { CreateUnitOrderDto } from 'src/unit-order/dto/create-unit-order.dto';
import { UnitOrderSerializer } from 'src/unit-order/serializer/unit-order.serializer';
import { Pagination } from 'src/paginate';
import { PermissionGuard } from 'src/common/guard/permission.guard';
//import JwtTwoFactorGuard from 'src/common/guard/jwt-two-factor.guard';

import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { UnitOrderFilterDto } from './dto/unit-order-filter.dto';
import { UpdateUnitOrderDto } from './dto/update-unit-order.dto';

@ApiTags('Unit-Order')
//@UseGuards(JwtTwoFactorGuard)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('unit-order')
export class UnitOrderController {
  constructor(private readonly unitOrderService: UnitOrderService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        operator_name: {
          type: 'string'
        },
        county_name: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        section: {
          type: 'string'
        },
        township: {
          type: 'string'
        },
        range: {
          type: 'string'
        },
        unit_order_link: {
          type: 'string'
        },
        State: {
          type: 'string'
        },
        rec_status: {
          type: 'string',
          description: 'The rec status A-Activated,D-Deleted',
          default: 'A',
          enum: ['A', 'D']
        }
      }
    }
  })
  createUnitOrder(
    @Req()
    req: Request,
    @Body()
    createUnitOrderDto: CreateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    const userInfo = req.user;
    createUnitOrderDto.created_by = userInfo;

    // if (userInfo.hasOwnProperty('name')) {
    //   createUnitOrderDto.created_by = userInfo['name'];
    // }

    return this.unitOrderService.create(createUnitOrderDto);
  }

  @Get()
  findAllUnitOrder(
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
  findOneUnitOrder(
    @Param('id')
    id: string
  ): Promise<UnitOrderSerializer> {
    return this.unitOrderService.findOne(+id);
  }

  @Put(':id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        operator_name: {
          type: 'string'
        },
        county_name: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        section: {
          type: 'string'
        },
        township: {
          type: 'string'
        },
        range: {
          type: 'string'
        },
        unit_order_link: {
          type: 'string'
        },
        State: {
          type: 'string'
        },
        rec_status: {
          type: 'string',
          description: 'The rec status A-Activated,D-Deleted',
          default: 'A',
          enum: ['A', 'D']
        }
      }
    }
  })
  updateUnitOrder(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateUnitOrderDto: UpdateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    const userInfo = req.user;
    updateUnitOrderDto.updated_by = userInfo;
    // if (userInfo.hasOwnProperty('name')) {
    //   updateUnitOrderDto.updated_by = userInfo['name'];
    // }
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
