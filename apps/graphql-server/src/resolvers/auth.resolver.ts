import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoginToken } from '../outpus/login-token.output';
import { AuthService } from '../services/auth.service';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Query(() => String) 
    hello() {
        console.log(`This is hello function!`)
        return 'hello world';
    }

    @Mutation(() => LoginToken)
    async login(
        @Args('username', { type: () => String }) username: string,
        @Args('password', { type: () => String }) password: string,
    ) {
        return this.authService.login(username, password);
    }
}
