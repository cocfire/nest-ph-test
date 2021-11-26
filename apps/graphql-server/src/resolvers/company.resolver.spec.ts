import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from '../services/company.service';
import { CompanyResolver } from './company.resolve';

describe('Company Resolver', () => {
  let resolver: CompanyResolver;

  const mockCompany = {
    _id: 'mockId',
    name: 'mockName',
    address: 'mockAddress',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyResolver,
        {
          provide: CompanyService,
          useFactory: () => ({
            findCompanyById: jest.fn((id: string) => mockCompany),
          }),
        },
      ],
    }).compile();

    resolver = module.get<CompanyResolver>(CompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('viewCompanyById', () => {
    it('should get the company', async () => {
      expect(await resolver.viewCompanyById('abc', 'jwt')).toEqual(mockCompany);
    });
  });
});
