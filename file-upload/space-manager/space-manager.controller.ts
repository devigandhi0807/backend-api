import {
  Controller,
  UploadedFile,
  UseInterceptors,
  Post
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadedMulterFileInterface } from 'src/common/interfaces/upload-multer-file.interface';
import { SpaceManagerService } from './space-manager.service';

@Controller('space-manager')
@ApiTags('Space-Manager')
export class SpaceManagerController {
  constructor(private readonly spaceManagerService: SpaceManagerService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary'
        }
      }
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('spaces')
  async uploadFile(@UploadedFile() file: UploadedMulterFileInterface) {
    const url = await this.spaceManagerService.uploadFile(file);
    return { url };
  }
}
