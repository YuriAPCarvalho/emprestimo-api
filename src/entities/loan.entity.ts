import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Seller } from './seller.entity';
import { SetupPunishment } from './setup-punishment.entity';

export enum LoanStatus {
    ON_GOING = 'on_going',
    FULLY_PAID = 'fully_paid',
    CANCELED = 'canceled'
}

@Entity('tbl_loan')
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number_of_installments: number;

    @Column()
    total_in_cents: number;

    @Column({
        type: "enum",
        enum: LoanStatus,
        name: 'enum_loan_status',
        default: LoanStatus.ON_GOING,
    })
    status: LoanStatus

    @Column()
    due_day: number;

    @Column()
    interest_rate: number;

    @Column()
    installment_value_in_cents: number;

    @Column()
    start_date: Date;

    @ManyToOne(() => Customer)
    @JoinColumn()
    id_customer: Customer

    @ManyToOne(() => SetupPunishment)
    @JoinColumn()
    id_setup_punishment: SetupPunishment

    @ManyToOne(() => Seller)
    @JoinColumn()
    id_seller: Seller

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
