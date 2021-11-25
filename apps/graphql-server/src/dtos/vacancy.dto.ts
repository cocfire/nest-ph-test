import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Vacancy {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  expiredAt: String;

  @Field(() => String)
  companyId: string;
}
