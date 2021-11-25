import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VacancyUpdateInput {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Date)
  expiredAt: Date;
}
