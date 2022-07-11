import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards
} from '@nestjs/common';
import { IhswellOnelinerService } from './ihswell-oneliner.service';
import { CreateIhswellOnelinerDto } from './dto/create-ihswell-oneliner.dto';
import { UpdateIhswellOnelinerDto } from './dto/update-ihswell-oneliner.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { IhswellOnelinerSerializer } from './serializer/ihswell-oneliner.serializer';
import { Pagination } from 'src/paginate';
import { IhswellOneLinerFilterDto } from './dto/ihswell-oneliner.filter.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { PermissionGuard } from 'src/common/guard/permission.guard';
@ApiTags('IHS-Well-One-Liner')
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller('ihs-well-one-liner')
export class IhswellOnelinerController {
  constructor(
    private readonly ihswellOnelinerService: IhswellOnelinerService
  ) {}

  @Post()
  create(
    @GetUser()
    userInfo: UserEntity,
    @Body() createIhswellOnelinerDto: CreateIhswellOnelinerDto
  ): Promise<IhswellOnelinerSerializer> {
    createIhswellOnelinerDto.created_by = userInfo;
    return this.ihswellOnelinerService.create(createIhswellOnelinerDto);
  }

  @Get()
  findAll(
    @Query()
    oneLinerDto: IhswellOneLinerFilterDto
  ): Promise<Pagination<IhswellOnelinerSerializer>> {
    return this.ihswellOnelinerService.findAll(oneLinerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IhswellOnelinerSerializer> {
    return this.ihswellOnelinerService.findOne(+id);
  }

  @Put(':id')
  update(
    @GetUser()
    userInfo: UserEntity,
    @Param('id') id: string,
    @Body() updateIhswellOnelinerDto: UpdateIhswellOnelinerDto
  ): Promise<IhswellOnelinerSerializer> {
    updateIhswellOnelinerDto.updated_by = userInfo;
    updateIhswellOnelinerDto.updatedAt = new Date();
    return this.ihswellOnelinerService.update(+id, updateIhswellOnelinerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ihswellOnelinerService.remove(+id);
  }
}
