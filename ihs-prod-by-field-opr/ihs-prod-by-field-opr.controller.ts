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
import { CreateIHSProdByFieldOprDto } from './dto/create-ihs-prod-by-field-opr.dto';
import { IHSProdByFieldOprFilterDto } from './dto/ihs-prod-by-field-opr.filter.dto';
import { UpdateIHSProdByFieldOprDto } from './dto/update-ihs-prod-by-field-opr.dto';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { IhsProdByFieldOprService } from './ihs-prod-by-field-opr.service';
import { IHSProdByFieldOprSerializer } from './serializer/ihs-prod-by-field-opr.serializer';
import { Pagination } from 'src/paginate';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

@ApiTags('IHS-Prod-By-Field-Opr')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ihs-prod-by-field-opr')
export class IhsProdByFieldOprController {
  constructor(
    private readonly ihsProdByFieldOprService: IhsProdByFieldOprService
  ) {}

  @Post('/new-prodby-fieldOpr')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        summary: {
          type: 'string'
        },
        source: {
          type: 'string'
        },
        production_id: {
          type: 'string'
        },
        entity_type: {
          type: 'string'
        },
        api: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        well_num: {
          type: 'string'
        },
        operator_name: {
          type: 'string'
        },
        location: {
          type: 'string'
        },
        field_name: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        country_name: {
          type: 'string'
        },
        basin: {
          type: 'string'
        },
        play_name: {
          type: 'string'
        },
        production_status: {
          type: 'string'
        },
        resv_onshore: {
          type: 'string'
        },
        resv_offshore: {
          type: 'string'
        },

        lease_code: {
          type: 'string'
        },
        oil_cum: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        oil_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        oil_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        active_num_wells: {
          type: 'integer'
        },
        first_prod_date: {
          type: 'string',
          format: 'date'
        },

        last_prod_date: {
          type: 'string',
          format: 'date'
        },
        td: {
          type: 'integer'
        },
        tvd: {
          type: 'integer'
        },
        upper_perf: {
          type: 'integer'
        },
        lower_perf: {
          type: 'integer'
        },
        oil_gatherer: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_gatherer: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        latitude: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        longitude: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        l_and_l_srce: {
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
  createNewProdByFieldOpr(
    @Req()
    req: Request,
    @Body()
    createProdByFieldOprDto: CreateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const userInfo = req.user;
    createProdByFieldOprDto.created_by = userInfo;
    return this.ihsProdByFieldOprService.create(createProdByFieldOprDto);
  }

  @Get()
  findAllProdByFieldOpr(
    @Query()
    prodFilterDto: IHSProdByFieldOprFilterDto
  ): Promise<Pagination<IHSProdByFieldOprSerializer>> {
    return this.ihsProdByFieldOprService.findAll(prodFilterDto);
  }

  @Put(':id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        summary: {
          type: 'string'
        },
        source: {
          type: 'string'
        },
        production_id: {
          type: 'string'
        },
        entity_type: {
          type: 'string'
        },
        api: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        well_num: {
          type: 'string'
        },
        operator_name: {
          type: 'string'
        },
        location: {
          type: 'string'
        },
        field_name: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        country_name: {
          type: 'string'
        },
        basin: {
          type: 'string'
        },
        play_name: {
          type: 'string'
        },
        production_status: {
          type: 'string'
        },
        resv_onshore: {
          type: 'string'
        },
        resv_offshore: {
          type: 'string'
        },

        lease_code: {
          type: 'string'
        },
        oil_cum: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        oil_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        oil_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        wtr_latest_mo: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        active_num_wells: {
          type: 'integer'
        },
        first_prod_date: {
          type: 'string',
          format: 'date'
        },

        last_prod_date: {
          type: 'string',
          format: 'date'
        },
        td: {
          type: 'integer'
        },
        tvd: {
          type: 'integer'
        },
        upper_perf: {
          type: 'integer'
        },
        lower_perf: {
          type: 'integer'
        },
        oil_gatherer: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        gas_gatherer: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        latitude: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        longitude: {
          type: 'number',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string'
        },
        l_and_l_srce: {
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
  updateProdByFieldOpr(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSProdByFieldOprDto: UpdateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const userInfo = req.user;
    updateIHSProdByFieldOprDto.updated_by = userInfo;

    updateIHSProdByFieldOprDto.updatedAt = new Date();
    return this.ihsProdByFieldOprService.update(
      +id,
      updateIHSProdByFieldOprDto
    );
  }

  @Get('/prod/:id')
  findOneProdByFieldOpr(
    @Param('id')
    id: string
  ): Promise<IHSProdByFieldOprSerializer> {
    return this.ihsProdByFieldOprService.findOne(+id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeProdByFieldOpr(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsProdByFieldOprService.remove(+id);
  }
}
