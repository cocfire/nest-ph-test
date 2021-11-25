import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
        @Inject('USER_SERVICE') private readonly userService: ClientProxy,
        private reflector: Reflector
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        //Token check
        console.log(`Api-gateway.JwtAuthGuard.canActivate: Is validating user.....`);
        const request = context.switchToHttp().getRequest();
        const jwt = request.headers['authorization']?.split(' ')[1];
        if (!jwt) {
            throw new UnauthorizedException(`Need a token`);
        }
        const loginUser = await this.authService.send({ cmd: 'checkToken' }, jwt ).toPromise();
        if (!loginUser) {
            throw new UnauthorizedException(`Token is not valid`);
        }
        const user = await this.userService.send({ cmd: 'findByUserName' }, loginUser.username).toPromise();
        if (!user) {
            throw new UnauthorizedException(`No such user`);
        }
        console.log(`Api-gateway.JwtAuthGuard.canActivate: Pass validate !`);

        //Role check
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        if(!requiredRoles.some((role) => user.role?.includes(role))){
            console.log(`Api-gateway.JwtAuthGuard.canActivate: Route '${request.url}' required role [${requiredRoles}], user has no right!`);
            throw new UnauthorizedException(`User has no right`);
        }
        return true;
    }
}

