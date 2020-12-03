
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
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