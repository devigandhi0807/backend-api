import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
  Put
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SonrisWellProfileService } from './sonris-well-profile.service';
import { CreateSonrisWellProfileDto } from './dto/create-sonris-well-profile.dto';
import { UpdateSonrisWellProfileDto } from './dto/update-sonris-well-profile.dto';
import { Pagination } from 'src/paginate';
import { PermissionGuard } from 'src/common/guard/permission.guard';

import { JwtAuthGuard } from 'src/common/guard/jwt-auth.guard';
import { SonrisWellProfileSerializer } from './serializer/sonris-well-profile.serializer';
import { SonrisWellProfileFilterDto } from './dto/sonris-well-profile-filter.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { UserEntity } from 'src/auth/entity/user.entity';
//import { SonrisWellProfileAdvanceFilterDto } from './dto/sonris-well-profile-advance-filter.dto';

@ApiTags('Sonris-Well-Profile')
@UseGuards(JwtAuthGuard, PermissionGuard)
@ApiBearerAuth()
@Controller('sonris-well-profile')
export class SonrisWellProfileController {
  constructor(
    private readonly sonrisWellProfileService: SonrisWellProfileService
  ) {}

  @Post()
  create(
    @GetUser()
    userInfo: UserEntity,
    @Body() createSonrisWellProfileDto: CreateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    createSonrisWellProfileDto.created_by = userInfo;
    return this.sonrisWellProfileService.create(createSonrisWellProfileDto);
  }

  @Get()
  findAll(
    @Query() sonrisFilterDto: SonrisWellProfileFilterDto
  ): Promise<Pagination<SonrisWellProfileSerializer>> {
    return this.sonrisWellProfileService.findAll(sonrisFilterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SonrisWellProfileSerializer> {
    return this.sonrisWellProfileService.findOne(+id);
  }

  @Put(':id')
  update(
    @GetUser()
    userInfo: UserEntity,
    @Param('id') id: string,
    @Body() updateSonrisWellProfileDto: UpdateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    updateSonrisWellProfileDto.updated_by = userInfo;
    updateSonrisWellProfileDto.updatedAt = new Date();
    return this.sonrisWellProfileService.update(
      +id,
      updateSonrisWellProfileDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sonrisWellProfileService.remove(+id);
  }
}
