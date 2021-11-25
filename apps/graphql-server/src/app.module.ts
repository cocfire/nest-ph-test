import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import Resolvers from './resolvers';
import Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // 自动生成schema.graphql文件
      autoSchemaFile: 'schema.graph',
      context: ({ req }) => ({
        authorization: req.headers.authorization || '',
      }),
    })
  ],
  providers: [...Services, ...Resolvers],
})
export class AppModule { }
