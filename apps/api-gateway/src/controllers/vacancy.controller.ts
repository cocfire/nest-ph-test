import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';
import { VacancyCreateDto } from '../dtos/vacancy-create.dto';
import { VacancyUpdateDto } from '../dtos/vacancy-update.dto';

@Controller()
export class VacancyController {
  constructor(
    @Inject('VACANCY_SERVICE') private readonly vacancyService: ClientProxy,
  ) { }

  @Post('/vacancy')
  createVacancy(@Body() vacancyDto: VacancyCreateDto) {
    console.log(`VacancyController.createVacancy: vacancy ${vacancyDto.title}`);
    return this.vacancyService.send<VacancyCreateDto>({ cmd: 'create' }, vacancyDto);
  }

  @Get('/vacancy')
  findById(@Body('vacancyId') vacancyId: ObjectId) {
    console.log(`VacancyController.findCompanyById: vacancyId ${vacancyId}`);
    return this.vacancyService.send<ObjectId>({ cmd: 'findById' }, vacancyId);
  }

  @Get('/vacancies')
  findByCompanyId(@Body('companyId') companyId: ObjectId) {
    console.log(`VacancyController.findByCompanyId: companyId ${companyId}`);
    return this.vacancyService.send<ObjectId>({ cmd: 'findByCompanyId' }, companyId);
  }

  @Delete('/vacancy')
  async deleteVacancyById(@Body('vacancyId') vacancyId: ObjectId) {
    console.log(`Vacancy-Service.deleteVacancyById: ${vacancyId}`)
    return this.vacancyService.send<ObjectId>({ cmd: 'delete' }, vacancyId);
  }

  @Put('/vacancy')
  updateVacancy(@Body() vacancyDto: VacancyUpdateDto) {
    console.log(`Vacancy-Service.updateVacancy: vacancy ${vacancyDto.title}`);
    return this.vacancyService.send<VacancyUpdateDto>({ cmd: 'update' }, vacancyDto);
  }
}
