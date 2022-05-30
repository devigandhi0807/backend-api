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
  UseGuards,
  UsePipes
  // UseFilters
} from '@nestjs/common';
import { Request } from 'express';
import { CreateIHSProdByFieldOprDto } from './dto/create-ihs-prod-by-field-opr.dto';
import { IHSProdByFieldOprFilterDto } from './dto/ihs-prod-by-field-opr.filter.dto';
import { UpdateIHSProdByFieldOprDto } from './dto/update-ihs-prod-by-field-opr.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { IhsProdByFieldOprService } from './ihs-prod-by-field-opr.service';
import { IHSProdByFieldOprSerializer } from './serializer/ihs-prod-by-field-opr.serializer';
import { Pagination } from 'src/paginate';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { CustomValidationPipe } from 'src/common/pipes/custom-validation.pipe';
//import { I18nExceptionFilterPipe } from 'src/common/pipes/i18n-exception-filter.pipe';

@ApiTags('IHS-Prod-By-Field-Opr')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ihs-prod-by-field-opr')
export class IhsProdByFieldOprController {
  constructor(
    private readonly ihsProdByFieldOprService: IhsProdByFieldOprService
  ) {}

  @Post('/new-prodby-fieldOpr')
  @UsePipes(new CustomValidationPipe())
  createNewProdByFieldOpr(
    @Req()
    req: Request,
    @Body()
    createProdByFieldOprDto: CreateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const userInfo = req.user;
    createProdByFieldOprDto.user = userInfo;

    if (userInfo.hasOwnProperty('name')) {
      createProdByFieldOprDto.created_by = userInfo['name'];
    }
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
  updateProdByFieldOpr(
    @Req()
    req: Request,
    @Param('id')
    id: string,
    @Body()
    updateIHSProdByFieldOprDto: UpdateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const userInfo = req.user;
    updateIHSProdByFieldOprDto.user = userInfo;
    if (userInfo.hasOwnProperty('name')) {
      updateIHSProdByFieldOprDto.updated_by = userInfo['name'];
    }
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
