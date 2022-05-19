import { PartialType } from '@nestjs/swagger';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
import { IHSMonthProdSearchFieldDto } from './ihs-month-prod-search-filter.dto';
export class IHSMonthProdFilterDto extends PartialType(CommonSearchFieldDto) {}
