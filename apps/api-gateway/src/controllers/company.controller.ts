import {
  Body,
  Controller,
  Get,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';

@Controller()
export class CompanyController {
  constructor(
    @Inject('COMPANY_SERVICE') private readonly companyService: ClientProxy,
  ) { }

  @Get('/company')
  findCompanyById(@Body('companyId') companyId: ObjectId) {
    console.log(`CompanyController.findCompanyById: companyId ${companyId}`);
    return this.companyService.send<ObjectId>({ cmd: 'findById' }, companyId);
  }

  @Get('/companyname')
  findCompanyByName(@Body('name') name: string) {
    console.log(`CompanyController.findCompanyByName: companyName ${name}`);
    return this.companyService.send<string>({ cmd: 'findByName' }, name);
  }
}
