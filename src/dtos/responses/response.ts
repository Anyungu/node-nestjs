import { ApiProperty } from "@nestjs/swagger"

export class GeneralResponse<T> {

    @ApiProperty()
    status: number

    @ApiProperty()
    message: string

    @ApiProperty()
    data: T


    constructor(status: number, message: string, data: T) {
        this.data = data
        this.status = status
        this.message = message
    }
}