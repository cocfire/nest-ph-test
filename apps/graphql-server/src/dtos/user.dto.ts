import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => String)
    _id: String;

    @Field(() => String)
    name: string;

    @Field(() => String)
    username: string;

    @Field(() => String)
    role: string;
}
