import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Entities } from "./entities";
import { SellerModule } from './seller/seller.module';
import { SetupPunishmentModule } from './setup-punishment/setup-punishment.module';
import { LoanModule } from './loan/loan.module';
import { InstallmentModule } from './installment/installment.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: '191.252.210.189',
        port: 5432,
        username: 'postgres',
        password: 'postgres_2804$',
        database: 'emprestimo_db',
        entities: Entities,
        synchronize: true,
    }), CustomerModule, SellerModule, SetupPunishmentModule, LoanModule, InstallmentModule]
})
export class AppModule {
}
