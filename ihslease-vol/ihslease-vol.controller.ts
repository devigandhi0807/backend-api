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

import { IhsleaseVolService } from 'src/ihslease-vol/ihslease-vol.service';
import { CreateIHSLeaseVolDto } from 'src/ihslease-vol/dto/create-ihslease-vol.dto';
import { IHSLeaseVolSerializer } from 'src/ihslease-vol/serializer/ihslease-vol.serializer';
import { Pagination } from 'src/paginate';
//import { PermissionGuard } from 'src/common/guard/permission.guard';
//import JwtTwoFactorGuard from 'src/common/guard/jwt-two-factor.guard';

import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';

import { IHSLeaseVolFilterDto } from './dto/ihslease-vol-filter.dto';
import { UpdateIHSLeaseVolDto } from './dto/update-ihslease-vol.dto';

@ApiTags('IHS-Lease-VOL')
//@UseGuards(JwtTwoFactorGuard)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ihslease-vol')
export class IhsleaseVolController {
  constructor(private readonly ihsLeaseVolService: IhsleaseVolService) {}

  @Post('/createNewVol')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        map_symbol: {
          type: 'string'
        },
        source: {
          type: 'string'
        },
        primary_api: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        well_num: {
          type: 'string'
        },
        gas_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        oil_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        gas_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        oil_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
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
  createLeaseVol(
    @Req()
    req: Request,
    @Body()
    createIHSLeaseVolDto: CreateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    const userInfo = req.user;
    createIHSLeaseVolDto.created_by = userInfo;

    // if (userInfo.hasOwnProperty('name')) {
    //   createIHSLeaseVolDto.created_by = userInfo['name'];
    // }

    return this.ihsLeaseVolService.create(createIHSLeaseVolDto);
  }

  @Get()
  findAllLeaseVol(
    @Query()
    volFilterDto: IHSLeaseVolFilterDto
  ): Promise<Pagination<IHSLeaseVolSerializer>> {
    return this.ihsLeaseVolService.findAll(volFilterDto);
  }

  @Get('/vol/:id')
  findOneLeaseVol(
    @Param('id')
    id: string
  ): Promise<IHSLeaseVolSerializer> {
    return this.ihsLeaseVolService.findOne(+id);
  }

  @Put(':id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        map_symbol: {
          type: 'string'
        },
        source: {
          type: 'string'
        },
        primary_api: {
          type: 'string'
        },
        lease_name: {
          type: 'string'
        },
        well_num: {
          type: 'string'
        },
        gas_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        oil_cum: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        gas_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
        },
        oil_ytd: {
          type: 'numeric',
          example: '"0.00"',
          description: 'this field is numeric type but value given as string '
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
  updateLeaseVol(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSLeaseVolDto: UpdateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    const userInfo = req.user;
    updateIHSLeaseVolDto.updated_by = userInfo;
    // if (userInfo.hasOwnProperty('name')) {
    //   updateIHSLeaseVolDto.updated_by = userInfo['name'];
    // }
    updateIHSLeaseVolDto.updatedAt = new Date();
    return this.ihsLeaseVolService.update(+id, updateIHSLeaseVolDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeLeaseVol(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsLeaseVolService.remove(+id);
  }
}
