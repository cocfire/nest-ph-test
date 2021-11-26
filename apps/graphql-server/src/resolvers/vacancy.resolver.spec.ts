import { Test, TestingModule } from '@nestjs/testing';
import { VacancyCreateInput } from '../inputs/vacancy-create.input';
import { VacancyUpdateInput } from '../inputs/vacancy-update.input';
import { VacancyService } from '../services/vacancy.service';
import { VacancyResolver } from './vacancy.resolver';

describe('Vacancies Resolver', () => {
  let resolver: VacancyResolver;

  const mockVacancy = {
    _id: 'mockId',
    title: 'mockTitle',
    description: 'mockDescription',
    expireAt: 'mockExpireAt',
    companyId: 'mockCompanyId'
  };

  const mockResult = {
    statusCode: 200,
    messagee: 'mockMessage'
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VacancyResolver,
        {
          provide: VacancyService,
          useFactory: () => ({
            findAllVacanciesByCompanyId: jest.fn(
              (companyId: string, authorization: string) =>
                [mockVacancy],
            ),
            findVacancyByVacancyId: jest.fn(
              (vacancyId: string, authorization: string) =>
                mockVacancy,
            ),
            createVacancy: jest.fn(
              (vacancy: VacancyCreateInput, authorization: string) =>
                mockVacancy,
            ),
            deleteVacancyById: jest.fn(
              (vacancyId: string, authorization: string) =>
                mockResult,
            ),
            updateVacancyById: jest.fn(
              (vacancy: VacancyUpdateInput, authorization: string,) =>
                mockResult,
            ),
          }),
        },
      ],
    }).compile();

    resolver = module.get<VacancyResolver>(VacancyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('viewVacancies', () => {
    it('should return vacancies', async () => {
      expect(
        await resolver.viewVacancies(expect.anything(), expect.anything())
      ).toEqual([mockVacancy]);
    });
  });

  describe('viewVacancyById', () => {
    it('should return vacancy', async () => {
      expect(
        await resolver.viewVacancyById(expect.anything(),expect.anything())
      ).toEqual(mockVacancy);
    });
  });

  describe('createVacancy', () => {
    it('should return created vacancy', async () => {
      expect(
        await resolver.createVacancy(expect.anything(), expect.anything()),
      ).toEqual(mockVacancy);
    });
  });

  describe('deleteVacancy', () => {
    it('should return deleted resuilt', async () => {
      expect(
        await resolver.deleteVacancy(
          expect.anything(),
          expect.anything(),
        )
      ).toEqual(mockResult);
    });
  });

  describe('updateVacancy', () => {
    it('should return updated resuilt', async () => {
      expect(
        await resolver.updateVacancy(
          expect.anything(),
          expect.anything(),
        )
      ).toEqual(mockResult);
    });
  });
});
