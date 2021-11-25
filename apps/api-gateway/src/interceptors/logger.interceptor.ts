import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const logger = new Logger('Api-gateway');

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        logger.log(`Gateway has got request url:${request.url}`);

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => logger.log(`Response success, elapsed time ${Date.now() - now}ms`)),
            );
    }
}
