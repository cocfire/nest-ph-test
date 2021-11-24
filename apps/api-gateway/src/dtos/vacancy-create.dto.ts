import { IsString } from 'class-validator';

export class VacancyCreateDto {

    @IsString()
    companyId: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    expiredAt: Date;
}