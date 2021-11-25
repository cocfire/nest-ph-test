import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { VacancyCreateInput } from '../inputs/vacancy-create.input';
import { VacancyUpdateInput } from '../inputs/vacancy-update.input';

@Injectable()
export class VacancyService {
    async findAllVacanciesByCompanyId(companyId: string, authorization: string) {
        const vacancies = await axios
            .get(
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

    async findVacancyByVacancyId(vacancyId: string, authorization: string) {
        const vacancy = await axios
            .get(
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

    async createVacancy(vacancy: VacancyCreateInput, authorization: string) {
        const result = await axios
            .post(
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
    ) {
        const result = await axios
            .put(
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
    ) {
        const result = await axios
            .delete(
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
