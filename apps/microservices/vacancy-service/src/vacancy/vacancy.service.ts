import { Model, ObjectId } from 'mongoose';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vacancy, VacancyDocument } from './schemas/vacancy.schema';
import { VacancyDto } from './dtos/vacancy.dto';

@Injectable()
export class VacancyService {
  constructor(
    @InjectModel(Vacancy.name) private readonly vacancyModel: Model<VacancyDocument>,
  ) { }

  async create(vacancy: Vacancy): Promise<any> {
    const createdVacancy = new this.vacancyModel(vacancy);
    try {
      return createdVacancy.save()
    } catch (error) {
      throw new NotAcceptableException(`Failed`);
    }
  }

  async findById(_id: ObjectId): Promise<Vacancy> {
    return this.vacancyModel.findOne({ _id }).exec();
  }

  async findByCompanyId(companyId: ObjectId): Promise<Vacancy[]> {
    return this.vacancyModel.find({ companyId }).exec();
  }

  async deleteById(_id: ObjectId): Promise<any> {
    if (this.vacancyModel.deleteOne({ _id }).exec()) {
      return {
        "statusCode": 200,
        "message": "Succeed",
      }
    } else {
      throw new NotAcceptableException(`Failed`);
    }
  }

  async update(vacancyDto: VacancyDto): Promise<any> {
    const { _id, ...vacancy } = vacancyDto;
    const result = this.vacancyModel.updateOne(
      { _id},
      { $set: vacancy }
    ).exec();
    
    if (result) {
      return {
        "statusCode": 200,
        "message": "Succeed",
      }
    } else {
      throw new NotAcceptableException(`Failed`);
    }
  }
}
