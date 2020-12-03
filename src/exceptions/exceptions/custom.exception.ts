import { HttpException, HttpStatus } from "@nestjs/common";
import { GeneralResponse } from "src/dtos/responses/response";

export class CustomException<T> extends HttpException {


    constructor(code: number, message: string) {

        let gen: GeneralResponse<string> = new GeneralResponse(code, message, message)
        super(gen, HttpStatus.OK);

    }
}