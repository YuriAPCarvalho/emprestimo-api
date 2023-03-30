import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from 'src/entities/seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,
  ) { }
  async create(createSellerDto: CreateSellerDto) {
    const newSeller = await this.sellerRepository.create({
      ...createSellerDto
    })
    await this.sellerRepository.save(newSeller)
  }
  findAll() {
    return this.sellerRepository.find({ where: { deleted: false } });
  }

  findOne(id: number) {
    return this.sellerRepository.findOneBy({ id, deleted: false });
  }

  async update(id: number, updateSellerDto: UpdateSellerDto) {
    return await this.sellerRepository.update(id, updateSellerDto);
  }

  remove(id: number) {
    return this.sellerRepository.update(id, { deleted: true });
  }
}
