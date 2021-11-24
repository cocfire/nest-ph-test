import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vacancy, VacancySchema } from './schemas/vacancy.schema';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vacancy.name, schema: VacancySchema }]),
  ],
  controllers: [VacancyController],
  providers: [VacancyService],
})
export class VacancyModule { }
