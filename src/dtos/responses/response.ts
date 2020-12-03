import { ApiProperty } from "@nestjs/swagger"

export class GeneralResponse<T> {

    @ApiProperty()
    status: number

    @ApiProperty()
    message: string

    @ApiProperty()
    data: T
}