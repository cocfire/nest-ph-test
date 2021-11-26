import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Vacancy } from '../dtos/vacancy.dto';
import { VacancyCreateInput } from '../inputs/vacancy-create.input';
import { VacancyUpdateInput } from '../inputs/vacancy-update.input';
import { Result } from '../outpus/response-result.output';

@Injectable()
export class VacancyService {
    async findAllVacanciesByCompanyId(companyId: string, authorization: string): Promise<[Vacancy]> {
        const vacancies = await axios
            .get<[Vacancy]>(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/vacancies?companyId=${companyId}`,
                {
                    headers: {
                        authorization,
                    },
                },
            )
            .then(response => response.data)
            .catch(error => {
                throw new Error(JSON.stringify(error.response.data));
            });
        return vacancies;
    }

    async findVacancyByVacancyId(vacancyId: string, authorization: string): Promise<Vacancy> {
        const vacancy = await axios
            .get<Vacancy>(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/vacancy?vacancyId=${vacancyId}`,
                {
                    headers: {
                        authorization,
                    },
                },
            )
            .then(response => response.data)
            .catch(error => {
                throw new Error(JSON.stringify(error.response.data));
            });

        return vacancy;
    }

    async createVacancy(vacancy: VacancyCreateInput, authorization: string): Promise<Vacancy> {
        const result = await axios
            .post<Vacancy>(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/vacancy`,
                vacancy,
                {
                    headers: {
                        authorization,
                    },
                },
            )
            .then(response => response.data)
            .catch(error => {
                throw new Error(JSON.stringify(error.response.data));
            });

        return result;
    }

    async updateVacancyById(
        vacancy: VacancyUpdateInput,
        authorization: string,
    ): Promise<Result> {
        const result = await axios
            .put<Result>(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/vacancy`,
                vacancy,
                {
                    headers: {
                        authorization,
                    },
                },
            )
            .then(response => response.data)
            .catch(error => {
                throw new Error(JSON.stringify(error.response.data));
            });

        return result;
    }

    async deleteVacancyById(
        vacancyId: string,
        authorization: string,
    ): Promise<Result> {
        const result = await axios
            .delete<Result>(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/vacancy?vacancyId=${vacancyId}`,
                {
                    headers: {
                        authorization,
                    },
                },
            )
            .then(response => response.data)
            .catch(error => {
                throw new Error(JSON.stringify(error.response.data));
            });

        return result;
    }
}
