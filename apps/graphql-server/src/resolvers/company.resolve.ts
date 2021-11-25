import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Company } from '../dtos/company.dto';
import { CompanyService } from '../services/company.service';

@Resolver()
export class CompanyResolver {
    constructor(private readonly companyService: CompanyService) { }

    @Query(() => Company)
    viewCompanyById(
        @Args('companyId', { type: () => String }) companyId: string,
        @Context('authorization') authorization: string,
    ) {
        console.log(`Graphql-server.VacancyResolver.viewCompanyById: companyId ${companyId}`);
        return this.companyService.findCompanyById(companyId, authorization);
    }

}
