import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) { }

  async createToken(payload: any): Promise<any> {
    return this.jwtService.sign(payload);
  }

  async checkToken(jwt: string): Promise<any> {
    try {
      if (this.jwtService.verify(jwt)) {
        return jwt_decode(jwt);
      }
    } catch (e) {
      console.log(`Auth-Service.AuthController.checkToken: Token check failed`);
      return false;
    }
  }
}
