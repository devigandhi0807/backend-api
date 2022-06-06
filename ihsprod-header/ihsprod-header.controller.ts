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

import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        entity: {
          type: 'string'
        },
        api: {
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
        country_name: {
          type: 'string'
        },
        province_state_name: {
          type: 'string'
        },
        district_name: {
          type: 'string'
        },
        county_name: {
          type: 'string'
        },
        os_indicator: {
          type: 'string'
        },
        basin: {
          type: 'string'
        },
        operator_name: {
          type: 'string'
        },
        operator_city: {
          type: 'string'
        },
        field_name: {
          type: 'string'
        },
        prod_zone_name: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        lease_number: {
          type: 'integer'
        },

        well_num: {
          type: 'string'
        },
        location: {
          type: 'string'
        },
        gatherer_gas: {
          type: 'string'
        },
        gatherer_gas_name: {
          type: 'string'
        },
        gatherer_liquid: {
          type: 'string'
        },
        gatherer_liquid_name: {
          type: 'string'
        },
        status_date: {
          type: 'string',
          format: 'date'
        },

        status_current_name: {
          type: 'string'
        },

        date_production_start: {
          type: 'string',
          format: 'date'
        },
        date_production_stop: {
          type: 'string',
          format: 'date'
        },
        date_injection_start: {
          type: 'string',
          format: 'date'
        },
        date_injection_stop: {
          type: 'string',
          format: 'date'
        },
        pool_name: {
          type: 'string'
        },

        temperature_gradient: {
          type: 'numeric',
          example: '"0.0000"',
          description: 'this field is numeric type but value given as string '
        },
        n_factor: {
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
