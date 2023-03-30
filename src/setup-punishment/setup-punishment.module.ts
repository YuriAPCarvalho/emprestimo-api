import { Module } from '@nestjs/common';
import { SetupPunishmentService } from './setup-punishment.service';
import { SetupPunishmentController } from './setup-punishment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupPunishment } from 'src/entities/setup-punishment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SetupPunishment])],
  controllers: [SetupPunishmentController],
  providers: [SetupPunishmentService],

})
export class SetupPunishmentModule { }
