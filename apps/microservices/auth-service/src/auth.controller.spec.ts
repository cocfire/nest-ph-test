import { Test, TestingModule } from '@nestjs/testing';
import { Microservices/authController } from './microservices/auth.controller';
import { Microservices/authService } from './microservices/auth.service';

describe('Microservices/authController', () => {
  let microservices/authController: Microservices/authController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservices/authController],
      providers: [Microservices/authService],
    }).compile();

    microservices/authController = app.get<Microservices/authController>(Microservices/authController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservices/authController.getHello()).toBe('Hello World!');
    });
  });
});
