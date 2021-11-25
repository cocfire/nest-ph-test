import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    address: string;
}
