import { Test, TestingModule } from '@nestjs/testing';
import { Microservices/vacancyController } from './microservices/vacancy.controller';
import { Microservices/vacancyService } from './microservices/vacancy.service';

describe('Microservices/vacancyController', () => {
  let microservices/vacancyController: Microservices/vacancyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservices/vacancyController],
      providers: [Microservices/vacancyService],
    }).compile();

    microservices/vacancyController = app.get<Microservices/vacancyController>(Microservices/vacancyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservices/vacancyController.getHello()).toBe('Hello World!');
    });
  });
});
