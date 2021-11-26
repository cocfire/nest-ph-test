import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoginToken } from '../outpus/login-token.output';

@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<LoginToken> {
    const result = await axios
      .post<LoginToken>(
        `http://${process.env.API_GATEWAY_HOST}:${process.env.API_GATEWAY_PORT}/login`,
        {
          username,
          password,
        },
      )
      .then(response => response.data)
      .catch(error => {
        throw new Error(JSON.stringify(error.response.data));
      });

    return result;
  }
}
