import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneralResponse } from 'src/dtos/responses/response';
import { VoterDto } from 'src/dtos/voter/voter.dto';
import { CustomException } from 'src/exceptions/exceptions/custom.exception';
import { Repository } from 'typeorm';
import { VoterEntity } from '../../entities/voter/voter.entity';


@Injectable()
export class VoterService {

    constructor(
        @InjectRepository(VoterEntity)
        private votersRepository: Repository<VoterEntity>,
    ) { }


    async findAll(): Promise<VoterEntity[]> {
        let voters: VoterEntity[] = await this.votersRepository.find();

        if (voters.length < 1) {
            throw new CustomException(401, "Voter Not Found")
        }

        return voters;
    }

    async findOne(id: number): Promise<VoterEntity> {

        let voter: VoterEntity = await this.votersRepository.findOne(id);

        if (voter) {

            return voter

        } else {

            throw new CustomException(401, "Voter Not Found")

        }


    }

    async remove(id: string): Promise<void> {
        await this.votersRepository.delete(id);
    }

    async create(voter: VoterDto): Promise<VoterEntity> {

        let voterInstance: VoterEntity = this.votersRepository.create({
            email: voter.email,
            location: voter.location
        })
        let newVoter: VoterEntity = await this.votersRepository.save(voterInstance);

        return newVoter;
    }

    async update(id: number, voter: VoterDto): Promise<void> {

        let updatedVoter: VoterEntity = await this.votersRepository.update({ id: id }, { ...voter });


    }
}
