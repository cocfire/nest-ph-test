import { Test, TestingModule } from '@nestjs/testing';
import { Microservices/companyController } from './microservices/company.controller';
import { Microservices/companyService } from './microservices/company.service';

describe('Microservices/companyController', () => {
  let microservices/companyController: Microservices/companyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservices/companyController],
      providers: [Microservices/companyService],
    }).compile();

    microservices/companyController = app.get<Microservices/companyController>(Microservices/companyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservices/companyController.getHello()).toBe('Hello World!');
    });
  });
});
