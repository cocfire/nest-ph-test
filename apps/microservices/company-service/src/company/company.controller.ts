import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @MessagePattern({ cmd: 'findById' })
  async findCompanyById(companyId: ObjectId) {
    console.log(`Company-Service.CompanyController.findCompanyById: ${companyId}`)
    return this.companyService.findById(companyId);
  }

  @MessagePattern({ cmd: 'findByName' })
  async findCompanyByName(name: string) {
    console.log(`Company-Service.CompanyController.findCompanyByName: ${name}`)
    return this.companyService.findByName(name);
  }
}
