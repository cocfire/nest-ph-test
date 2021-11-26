import { Test } from '@nestjs/testing';
import axios from 'axios';
import { ConfigModule } from '@nestjs/config';
import { VacancyService } from './vacancy.service';

describe('Graphql - VacancyService', () => {
  let vacancyService: VacancyService;

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
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [VacancyService],
    }).compile();

    vacancyService = moduleRef.get<VacancyService>(VacancyService);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('findAllVacanciesByCompanyId', () => {
    it('should return vacancies when success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: [mockVacancy] });

      expect(await vacancyService.findAllVacanciesByCompanyId(expect.anything(), expect.anything())).toEqual(
        [mockVacancy],
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: 'Failed' } });
      await expect(
        vacancyService.findAllVacanciesByCompanyId(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });

  describe('findVacancyByVacancyId', () => {
    it('should return vacancy when success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: mockVacancy });
      
      expect(await vacancyService.findVacancyByVacancyId(expect.anything(), expect.anything())).toEqual(
        mockVacancy,
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: 'Failed' } });
      await expect(
        vacancyService.findVacancyByVacancyId(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });

  describe('createVacancy', () => {
    it('should return vacancy when success', async () => {
      jest.spyOn(axios, 'post').mockResolvedValue({ data: mockVacancy });

      expect(await vacancyService.createVacancy(expect.anything(), expect.anything())).toEqual(
        mockVacancy,
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'post').mockRejectedValue({ response: { data: 'Failed' } });
      await expect(
        vacancyService.createVacancy(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });

  describe('updateVacancyById', () => {
    it('should return vacancy when success', async () => {
      jest.spyOn(axios, 'put').mockResolvedValue({ data: mockResult });

      expect(await vacancyService.updateVacancyById(expect.anything(), expect.anything())).toEqual(
        mockResult,
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'put').mockRejectedValue({ response: { data: 'Failed' } });
      await expect(
        vacancyService.updateVacancyById(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });

  describe('deleteVacancyById', () => {
    it('should return vacancy when success', async () => {
      jest.spyOn(axios, 'delete').mockResolvedValue({ data: mockResult });

      expect(await vacancyService.deleteVacancyById(expect.anything(), expect.anything())).toEqual(
        mockResult,
      );
    });

    it('should throw error when fails', async () => {
      jest.spyOn(axios, 'delete').mockRejectedValue({ response: { data: 'Failed' } });
      await expect(
        vacancyService.deleteVacancyById(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });

});
