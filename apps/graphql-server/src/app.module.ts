import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import Resolvers from './resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // 自动生成schema.graphql文件
      autoSchemaFile: 'schema.graph',
    })
  ],
  providers: [...Resolvers],
})
export class AppModule {}
