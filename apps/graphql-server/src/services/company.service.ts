import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CompanyService {
    async findCompanyById(companyId: string, authorization: string) {
        console.log(`Graphql-server.VacancyService.findAllVacanciesByCompanyId: companyId ${companyId}`);
        const company = await axios
            .get(
                `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/company?companyId=${companyId}`,
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
        return company;
    }
}
