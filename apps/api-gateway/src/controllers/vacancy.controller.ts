import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ObjectId } from 'mongoose';
import { Roles } from '../decorators/roles.decorator';
import { VacancyCreateDto } from '../dtos/vacancy-create.dto';
import { VacancyUpdateDto } from '../dtos/vacancy-update.dto';
import { Role } from '../enums/role.enum';
import { JwtAuthGuard } from '../guards/auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class VacancyController {
  constructor(
    @Inject('VACANCY_SERVICE') private readonly vacancyService: ClientProxy,
  ) { }

  @Get('/vacancy')
  @Roles(Role.User, Role.Admin)
  findById(@Query('vacancyId') vacancyId: ObjectId) {
    console.log(`Api-gateway.VacancyController.findCompanyById: vacancyId ${vacancyId}`);
    return this.vacancyService.send({ cmd: 'findById' }, vacancyId);
  }

  @Get('/vacancies')
  @Roles(Role.User, Role.Admin)
  findByCompanyId(@Query('companyId') companyId: ObjectId) {
    console.log(`Api-gateway.VacancyController.findByCompanyId: companyId ${companyId}`);
    return this.vacancyService.send({ cmd: 'findByCompanyId' }, companyId);
  }

  @Post('/vacancy')
  @Roles(Role.Admin)
  createVacancy(@Body() vacancyDto: VacancyCreateDto) {
    console.log(`Api-gateway.VacancyController.createVacancy: vacancy ${vacancyDto.title}`);
    return this.vacancyService.send({ cmd: 'create' }, vacancyDto);
  }

  @Delete('/vacancy')
  @Roles(Role.Admin)
  async deleteVacancyById(@Query('vacancyId') vacancyId: ObjectId) {
    console.log(`Api-gateway.Vacancy-Service.deleteVacancyById: ${vacancyId}`)
    return this.vacancyService.send({ cmd: 'delete' }, vacancyId);
  }

  @Put('/vacancy')
  @Roles(Role.Admin)
  updateVacancy(@Body() vacancyDto: VacancyUpdateDto) {
    console.log(`Api-gateway.Vacancy-Service.updateVacancy: vacancy ${vacancyDto.title}`);
    return this.vacancyService.send({ cmd: 'update' }, vacancyDto);
  }
}
