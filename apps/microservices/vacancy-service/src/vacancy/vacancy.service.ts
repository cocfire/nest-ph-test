import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
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
    return createdVacancy.save();
  }

  async findById(_id: ObjectId): Promise<Vacancy> {
    return this.vacancyModel.findOne({ _id }).exec();
  }

  async findByCompanyId(companyId: ObjectId): Promise<Vacancy[]> {
    return this.vacancyModel.find({ companyId }).exec();
  }

  async deleteById(_id: ObjectId): Promise<any> {
    return this.vacancyModel.deleteOne({ _id }).exec();
  }

  async update(vacancyDto: VacancyDto): Promise<any> {
    const { _id, ...vacancy } = vacancyDto;
    return this.vacancyModel.updateOne(
      { _id},
      { $set: vacancy }
    ).exec();
  }
}
