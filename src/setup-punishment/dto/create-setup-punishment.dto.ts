import { PunishmentTypes } from "src/entities/setup-punishment.entity"

export class CreateSetupPunishmentDto {
    name: string
    type_punishment: PunishmentTypes
    value: number
}
