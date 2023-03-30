import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetupPunishment } from 'src/entities/setup-punishment.entity';
import { Repository } from 'typeorm';
import { CreateSetupPunishmentDto } from './dto/create-setup-punishment.dto';
import { UpdateSetupPunishmentDto } from './dto/update-setup-punishment.dto';

@Injectable()
export class SetupPunishmentService {
  constructor(
    @InjectRepository(SetupPunishment)
    private setupPunishmentRepository: Repository<SetupPunishment>,
  ) { }
  async create(createSetupPunishmentDto: CreateSetupPunishmentDto) {
    const newSeller = await this.setupPunishmentRepository.create({
      ...createSetupPunishmentDto
    })
    await this.setupPunishmentRepository.save(newSeller)
  }

  findAll() {
    return this.setupPunishmentRepository.find({ where: { deleted: false } });
  }

  findOne(id: number) {
    return this.setupPunishmentRepository.findOneBy({ id, deleted: false });
  }

  update(id: number, updateSetupPunishmentDto: UpdateSetupPunishmentDto) {
    return this.setupPunishmentRepository.update(id, updateSetupPunishmentDto);
  }

  remove(id: number) {
    return this.setupPunishmentRepository.update(id, { deleted: true });
  }
}
