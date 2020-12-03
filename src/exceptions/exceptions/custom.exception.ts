import { HttpException, HttpStatus } from "@nestjs/common";
import { GeneralResponse } from "src/dtos/responses/response";

export class CustomException<T> extends HttpException {

    constructor(code: number, message: string) {
        let gen: GeneralResponse<string> = <GeneralResponse<string>>{
            status: code,
            message: message,
            data: {}
        }
        super(gen, HttpStatus.OK);
    }
}