import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Vacancy } from '../dtos/vacancy.dto';
import { VacancyCreateInput } from '../inputs/vacancy-create.input';
import { VacancyUpdateInput } from '../inputs/vacancy-update.input';
import { Result } from '../outpus/response-result.output';
import { VacancyService } from '../services/vacancy.service';

@Resolver()
export class VacancyResolver {
    constructor(private readonly vacancyService: VacancyService) { }

    @Query(() => [Vacancy])
    viewVacancies(
        @Args('companyId', { type: () => String }) companyId: string,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.viewVacancies: companyId ${companyId}`);
        return this.vacancyService.findAllVacanciesByCompanyId(companyId, authorization);
    }

    @Query(() => Vacancy)
    viewVacancyById(
        @Args('vacancyId', { type: () => String }) vacancyId: string,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.viewVacancyById: vacancyId ${vacancyId}`);
        return this.vacancyService.findVacancyByVacancyId(vacancyId, authorization);
    }

    @Mutation(() => Vacancy)
    async createVacancy(
        @Args('vacancy') vacancy: VacancyCreateInput,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.createVacancy: vacancy.title ${vacancy.title}`);
        return this.vacancyService.createVacancy(vacancy, authorization);
    }

    @Mutation(() => Result)
    async deleteVacancy(
        @Args('vacancyId', { type: () => String }) vacancyId: string,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.deleteVacancy: vacancyId ${vacancyId}`);
        return this.vacancyService.deleteVacancyById(vacancyId, authorization,);
    }

    @Mutation(() => Result)
    async updateVacancy(
        @Args('vacancy') vacancy: VacancyUpdateInput,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.updateVacancy: vacancyId ${vacancy._id}`);
        return this.vacancyService.updateVacancyById(vacancy, authorization,);
    }
}
