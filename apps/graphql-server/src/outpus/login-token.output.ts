import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginToken {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    name: string;
    
    @Field(() => String)
    username: string;

    @Field(() => String)
    role: string;
    
    @Field(() => String)
    companyId: string;

    @Field(() => String)
    access_token: string;
}
