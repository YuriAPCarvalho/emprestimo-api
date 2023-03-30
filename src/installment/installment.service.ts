import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Installment } from 'src/entities/installment.entity';
import { Repository } from 'typeorm';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';

@Injectable()
export class InstallmentService {
  constructor(
    @InjectRepository(Installment)
    private InstallmentRepository: Repository<Installment>,
  ) { }
  async create(createInstallmentDto: CreateInstallmentDto) {
    const newInstallment = await this.InstallmentRepository.create({
      ...createInstallmentDto
    })
    await this.InstallmentRepository.save(newInstallment)
  }

  findAll() {
    return this.InstallmentRepository.find();
  }

  findOne(id: number) {
    return this.InstallmentRepository.findOneBy({ id });
  }

  update(id: number, updateInstallmentDto: UpdateInstallmentDto) {
    return this.InstallmentRepository.update(id, updateInstallmentDto);
  }

  remove(id: number) {
    return this.InstallmentRepository.delete(id)
  }
}
