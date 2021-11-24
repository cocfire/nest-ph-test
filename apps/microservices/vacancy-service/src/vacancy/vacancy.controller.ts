import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';
import { VacancyDto } from './dtos/vacancy.dto';
import { Vacancy } from './schemas/vacancy.schema';
import { VacancyService } from './vacancy.service';

@Controller()
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) { }

  @MessagePattern({ cmd: 'create' })
  async createVacancy(vacancy: Vacancy) {
    console.log(`Vacancy-Service.CompanyController.createVacancy: ${vacancy.title}`)
    return this.vacancyService.create(vacancy);
  }

  @MessagePattern({ cmd: 'findById' })
  async findVacancyById(vacancyId: ObjectId) {
    console.log(`Vacancy-Service.CompanyController.findVacancyById: ${vacancyId}`)
    return this.vacancyService.findById(vacancyId);
  }

  @MessagePattern({ cmd: 'findByCompanyId' })
  async findByCompanyId(companyId: ObjectId) {
    console.log(`Vacancy-Service.CompanyController.findByCompanyId: ${companyId}`)
    return this.vacancyService.findByCompanyId(companyId);
  }

  @MessagePattern({ cmd: 'delete' })
  async deleteVacancyById(vacancyId: ObjectId) {
    console.log(`Vacancy-Service.CompanyController.deleteVacancyById: ${vacancyId}`)
    return this.vacancyService.deleteById(vacancyId);
  }

  @MessagePattern({ cmd: 'update' })
  async update(vacancyDto: VacancyDto) {
    console.log(`Vacancy-Service.CompanyController.update: ${vacancyDto.title}`)
    return this.vacancyService.update(vacancyDto);
  }
}
