import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from "../entities/customer.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = await this.customerRepository.create({
      ...createCustomerDto
    })
    await this.customerRepository.save(newCustomer)
  }

  findAll() {
    return this.customerRepository.find({ where: { deleted: false } });
  }

  findOne(id: number) {
    return this.customerRepository.findOneBy({ id, deleted: false });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return this.customerRepository.update(id, { deleted: true });
  }
}
