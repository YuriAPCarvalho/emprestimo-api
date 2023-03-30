import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PunishmentTypes {
    PERCENT_VALUE = 'percent_value',
    FIXED_VALUE = 'fixed_value'
}

@Entity('tbl_setup_punishment')
export class SetupPunishment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: PunishmentTypes,
        name: 'enum_type_punishment',
        default: PunishmentTypes.FIXED_VALUE,
    })
    type_punishment: PunishmentTypes

    @Column()
    value: number;

    @Column({nullable:true})
    name: string;

    @Column({ default: false })
    deleted: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
