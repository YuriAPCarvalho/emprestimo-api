import { PartialType } from '@nestjs/mapped-types';
import { CreateInstallmentDto } from './create-installment.dto';

export class UpdateInstallmentDto extends PartialType(CreateInstallmentDto) {
    created_at?: Date
    updated_at?: Date
}
