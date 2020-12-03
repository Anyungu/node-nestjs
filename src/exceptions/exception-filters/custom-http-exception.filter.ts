
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { CustomException } from '../exceptions/custom.exception';



@Catch(CustomException)
export class CustomHttpExceptionFilter<T> implements ExceptionFilter {
    catch(exception: CustomException<T>, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status = exception.getStatus();
        const gen = exception.getResponse();

        response
            .status(status)
            .json(gen)
    }

}