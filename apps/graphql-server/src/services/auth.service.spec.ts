import { Test } from '@nestjs/testing';
import axios from 'axios';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';

describe('Graphql - AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [AuthService],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('login', () => {
    it('should return userToken when success', async () => {
      const mockToken = { name: 'mockToken' };
      jest.spyOn(axios, 'post').mockResolvedValue({ data: mockToken });

      expect(await authService.login(expect.anything(), expect.anything())).toEqual(
        mockToken,
      );
    });

    it('should throw error when fails', async () => {
      jest
        .spyOn(axios, 'post')
        .mockRejectedValue({ response: { data: 'Failed' } });

      await expect(
        authService.login(expect.anything(), expect.anything()),
      ).rejects.toThrowError('Failed');
    });
  });
});
