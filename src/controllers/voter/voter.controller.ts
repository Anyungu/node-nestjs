import { Controller, Get, Post, Body, Param, Put, Query, Response, UseFilters } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { VoterDto } from '../../dtos/voter/voter.dto';
import { GeneralResponse } from '../../dtos/responses/response';
import { VoterService } from '../../services/voter/voter.service';
import { VoterEntity } from 'src/entities';
import { CustomHttpExceptionFilter } from 'src/exceptions/exception-filters/custom-http-exception.filter';
import { AllExceptionsFilter } from 'src/exceptions/exception-filters/all-custom-execption-filters';


@Controller('voter')
@ApiTags('voter')
@UseFilters(AllExceptionsFilter, CustomHttpExceptionFilter)
export class VoterController {

    constructor(private voterService: VoterService) { }


    @Post()
    @ApiBody({
        type: VoterDto
    })
    async createVoter(@Body() voterDto: VoterDto) {
        let data: VoterEntity = await this.voterService.create(voterDto);
        let gen: GeneralResponse<VoterEntity> = <GeneralResponse<VoterEntity>>{
            status: 200,
            message: 'success',
            data
        }
        return gen;
    }


    @Get()
    @ApiParam({ name: 'id' })
    async findOneVoter(@Param() id: number): Promise<GeneralResponse<VoterEntity>> {
        let voter: VoterEntity = await this.voterService.findOne(id);
        let gen: GeneralResponse<VoterEntity> = <GeneralResponse<VoterEntity>>{
            status: 200,
            message: 'Voter Found',
            data: voter
        }
        return gen;
    }

    @Get('/all')
    async findAllVoters() {
        let voters: VoterEntity[] = await this.voterService.findAll()
        let gen: GeneralResponse<VoterEntity[]> = <GeneralResponse<VoterEntity[]>>{
            status: 200,
            message: 'Voter Found',
            data: voters
        }
        return gen;
    }

    @Put()
    @ApiQuery({ name: 'id' })
    @ApiBody({
        type: VoterDto
    })
    async updateVoter(@Query() id: number, @Body() voterDto: VoterDto) {
        await this.voterService.update(id, voterDto)
        let gen: GeneralResponse<VoterEntity[]> = <GeneralResponse<VoterEntity[]>>{
            status: 200,
            message: 'Voter Updated',
            data: {}
        }
        return gen;
    }

}
