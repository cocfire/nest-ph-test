import { Test, TestingModule } from '@nestjs/testing';
import { Microservices/userController } from './microservices/user.controller';
import { Microservices/userService } from './microservices/user.service';

describe('Microservices/userController', () => {
  let microservices/userController: Microservices/userController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservices/userController],
      providers: [Microservices/userService],
    }).compile();

    microservices/userController = app.get<Microservices/userController>(Microservices/userController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservices/userController.getHello()).toBe('Hello World!');
    });
  });
});
