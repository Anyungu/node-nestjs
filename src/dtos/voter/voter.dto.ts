import { ApiProperty } from '@nestjs/swagger';

export class VoterDto {

    @ApiProperty()
    email: string


    @ApiProperty()
    location: string
}
