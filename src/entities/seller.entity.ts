import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_seller')
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({ default: false })
    deleted: boolean;

    @Column({nullable: true})
    zipcode: string;

    @Column({nullable: true})
    street: string;

    @Column({nullable: true})
    number: string;

    @Column({nullable: true})
    complement: string;

    @Column({nullable: true})
    neighborhood: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
