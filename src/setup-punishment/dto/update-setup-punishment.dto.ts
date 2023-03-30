import { PartialType } from '@nestjs/mapped-types';
import { CreateSetupPunishmentDto } from './create-setup-punishment.dto';

export class UpdateSetupPunishmentDto extends PartialType(CreateSetupPunishmentDto) {
    deleted: boolean
    created_at?: Date
    updated_at?: Date
}
