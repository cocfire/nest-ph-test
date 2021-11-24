import { IsString } from 'class-validator';

export class VacancyUpdateDto {
    
    @IsString()
    _id: string;

    @IsString()
    companyId: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    expiredAt: Date;
}