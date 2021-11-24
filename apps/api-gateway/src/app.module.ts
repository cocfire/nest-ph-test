import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Transport, ClientProxyFactory } from '@nestjs/microservices';
import controllers from './controllers';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [...controllers],
  providers: [
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('USER_SERVICE_HOST'),
            port: configService.get('USER_SERVICE_PORT'),
          },
        });
      },
      inject: [ConfigService],
    },

    {
      provide: 'COMPANY_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('COMPANY_SERVICE_HOST'),
            port: configService.get('COMPANY_SERVICE_PORT'),
          },
        });
      },
      inject: [ConfigService],
    },

    {
      provide: 'VACANCY_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('VACANCY_SERVICE_HOST'),
            port: configService.get('VACANCY_SERVICE_PORT'),
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule { }