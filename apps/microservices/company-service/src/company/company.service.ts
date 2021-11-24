import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';


@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<CompanyDocument>,
  ) { }

  async findById(companyId: ObjectId): Promise<Company> {
    return this.companyModel.findOne({ _id: require('mongodb').ObjectID(companyId) }).exec();
  }

  async findByName(name: string): Promise<Company> {
    return this.companyModel.findOne({ name }).exec();
  }
}
