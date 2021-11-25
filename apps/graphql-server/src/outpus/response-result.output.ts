import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Result {
    @Field(() => Number)
    statusCode: number;

    @Field(() => String)
    message: string;
}
