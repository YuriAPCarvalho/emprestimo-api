import { PartialType } from '@nestjs/mapped-types';
import { DeleteDateColumn } from 'typeorm';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    deleted: boolean
    created_at?: Date
    updated_at?: Date
}
