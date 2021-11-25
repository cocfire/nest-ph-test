import {
  Body,
  Controller,
  Get,
  Inject,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from '../guards/auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class CompanyController {
  constructor(
    @Inject('COMPANY_SERVICE') private readonly companyService: ClientProxy,
  ) { }

  @Get('/company')
  findCompanyById(@Query('companyId') companyId: ObjectId) {
    console.log(`Api-gateway.CompanyController.findCompanyById: companyId ${companyId}`);
    return this.companyService.send({ cmd: 'findById' }, companyId);
  }

  @Get('/companyname')
  findCompanyByName(@Query('name') name: string) {
    console.log(`Api-gateway.CompanyController.findCompanyByName: companyName ${name}`);
    return this.companyService.send({ cmd: 'findByName' }, name);
  }
}
