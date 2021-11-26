import { Test } from '@nestjs/testing';
import axios from 'axios';
import { ConfigModule } from '@nestjs/config';
import { CompanyService } from './company.service';

describe('Graphql - CompanyService', () => {
  let companyService: CompanyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [CompanyService],
    }).compile();

    companyService = moduleRef.get<CompanyService>(CompanyService);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('findCompanyById', () => {
    it('should return company when success', async () => {
      const mockCompany = { name: 'mockedName' };
      jest.spyOn(axios, 'get').mockResolvedValue({ data: mockCompany });

      expect(await companyService.findCompanyById(expect.anything(), expect.anything())).toEqual(
        mockCompany,
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: 'Failed' } });

      await expect(
        companyService.findCompanyById(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });
});
