import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Loan } from 'src/entities/loan.entity';
import { Repository } from 'typeorm';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private loanRepository: Repository<Loan>,
  ) { }

  async create(createLoanDto: CreateLoanDto) {
    
    try {
      const newCustomer = await this.loanRepository.create({
        ...createLoanDto
      })
      await this.loanRepository.save(newCustomer)
    } catch (error) {
      console.log(error);
      
    }
  } 

  findAll() {
    return this.loanRepository.find(
      {
        relations: ['id_customer','id_setup_punishment','id_seller']
      
      }
    );
  }

  findOne(id: number) {
    return this.loanRepository.findOneBy({ id });
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return this.loanRepository.update(id, updateLoanDto);
  }

  remove(id: number) {
    return this.loanRepository.delete(id)
  }
}
