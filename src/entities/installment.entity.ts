import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Loan } from './loan.entity';

export enum InstallmentStatus {
    PAID = 'paid',
    PARTIALLYPAID = 'partially_paid',
    OPEN = 'open'
}

@Entity('tbl_installment')
export class Installment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    installment_number: number;

    @Column()
    total_in_cents: number;

    @Column()
    due_date: Date;

    @Column()
    date_pay: Date;

    @Column({
        type: "enum",
        enum: InstallmentStatus,
        name: 'enum_installment_status',
        default: InstallmentStatus.OPEN,
    })
    status: InstallmentStatus

    @Column()
    voucher_of_payment: number;

    @OneToOne(() => Loan)
    @JoinColumn()
    id_loan: Loan

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;


}