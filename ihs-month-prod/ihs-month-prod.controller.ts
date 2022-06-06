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
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        entity: {
          type: 'string'
        },
        source: {
          type: 'string'
        },

        entity_type: {
          type: 'string'
        },
        primary_product: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        well_num: {
          type: 'string'
        },
        api: {
          type: 'string'
        },
        regulatory_api: {
          type: 'string'
        },
        operator_name: {
          type: 'string'
        },
        year: {
          type: 'integer',
          description: 'this field accept from 1900 to 2099 numbers'
        },
        month: {
          type: 'string'
        },

        liquid: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        water: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        ratio_gas_oil: {
          type: 'numeric',
          example: '"0.0000"',
          description: 'this field is numeric type but value given as string'
        },
        percent_water: {
          type: 'numeric',
          example: '"0.0000"',
          description: 'this field is numeric type but value given as string'
        },
        wells: {
          type: 'integer'
        },
        days_on: {
          type: 'integer'
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
  createNewMonthProd(
    @Req()
    req: Request,
    @Body()
    createIHSMonthProdDto: CreateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const userInfo = req.user;
    createIHSMonthProdDto.user = userInfo;

    if (userInfo.hasOwnProperty('name')) {
      createIHSMonthProdDto.created_by = userInfo['name'];
    }
    return this.ihsMonthProdService.create(createIHSMonthProdDto);
  }

  @Get()
  findAllMonthProd(
    @Query()
    prodFilterDto: IHSMonthProdFilterDto
  ): Promise<Pagination<IHSMonthProdSerializer>> {
    return this.ihsMonthProdService.findAll(prodFilterDto);
  }

  @Put(':id')
  updateMonthProd(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSMonthDto: UpdateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const userInfo = req.user;
    updateIHSMonthDto.user = userInfo;
    if (userInfo.hasOwnProperty('name')) {
      updateIHSMonthDto.updated_by = userInfo['name'];
    }
    updateIHSMonthDto.updatedAt = new Date();
    return this.ihsMonthProdService.update(+id, updateIHSMonthDto);
  }

  @Get('/prod/:id')
  findOneMonthProd(
    @Param('id')
    id: string
  ): Promise<IHSMonthProdSerializer> {
    return this.ihsMonthProdService.findOne(+id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeMonthProd(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsMonthProdService.remove(+id);
  }
}
