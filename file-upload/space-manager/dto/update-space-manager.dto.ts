import { PartialType } from '@nestjs/swagger';
import { CreateSpaceManagerDto } from './create-space-manager.dto';

export class UpdateSpaceManagerDto extends PartialType(CreateSpaceManagerDto) {}
