import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../services/auth.service';
import { AuthResolver } from './auth.resolver';

describe('Auth Resolver', () => {
  let resolver: AuthResolver;

  const mockLoginToken = {
    _id: '_id',
    name: 'name',
    username: 'username',
    role: 'role',
    companyId: 'companyId',
    accessToken: 'accessToken',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          useFactory: () => ({
            login: jest.fn(
              (username: string, password: string) => mockLoginToken,
            ),
          }),
        },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('login', () => {
    it('should return token', async () => {
      expect(await resolver.login('username', 'password')).toEqual(
        mockLoginToken,
      );
    });
  });
});
