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
import { CreateIHSProdByFieldOprDto } from './dto/create-ihs-prod-by-field-opr.dto';
import { IHSProdByFieldOprFilterDto } from './dto/ihs-prod-by-field-opr.filter.dto';
import { UpdateIHSProdByFieldOprDto } from './dto/update-ihs-prod-by-field-opr.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { IhsProdByFieldOprService } from './ihs-prod-by-field-opr.service';
import { IHSProdByFieldOprSerializer } from './serializer/ihs-prod-by-field-opr.serializer';
import { Pagination } from 'src/paginate';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { PermissionGuard } from 'src/common/guard/permission.guard';

@ApiTags('IHS-Prod-By-Field-Opr')
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller('ihs-prod-by-field-opr')
export class IhsProdByFieldOprController {
  constructor(
    private readonly ihsProdByFieldOprService: IhsProdByFieldOprService
  ) {}

  @Post('')
  create(
    @GetUser()
    userInfo: UserEntity,
    @Body()
    createProdByFieldOprDto: CreateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
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
  update(
    @GetUser()
    userInfo: UserEntity,
    @Param('id')
    id: string,
    @Body()
    updateIHSProdByFieldOprDto: UpdateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    updateIHSProdByFieldOprDto.updated_by = userInfo;

    updateIHSProdByFieldOprDto.updatedAt = new Date();
    return this.ihsProdByFieldOprService.update(
      +id,
      updateIHSProdByFieldOprDto
    );
  }

  @Get(':id')
  findOneProdByFieldOpr(
    @Param('id')
    id: string
  ): Promise<IHSProdByFieldOprSerializer> {
    return this.ihsProdByFieldOprService.findOne(+id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeProdByFieldOpr(
    @Param('id')
    id: string
  ): Promise<void> {
    return this.ihsProdByFieldOprService.remove(+id);
  }
}
