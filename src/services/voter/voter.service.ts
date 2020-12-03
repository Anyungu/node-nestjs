import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VoterDto } from 'src/dtos/voter/voter.dto';
import { CustomException } from 'src/exceptions/exceptions/custom.exception';
import { Repository, UpdateResult } from 'typeorm';
import { VoterEntity } from '../../entities/voter/voter.entity';


@Injectable()
export class VoterService {

    constructor(
        @InjectRepository(VoterEntity)
        private votersRepository: Repository<VoterEntity>,
    ) { }


    async findAll(): Promise<VoterEntity[]> {
        let voters: VoterEntity[] = await this.votersRepository.find();
        return voters;
    }

    /**
     * 
     * @param id 
     */
    async findOne(id: number): Promise<VoterEntity> {
        let voter: VoterEntity = await this.votersRepository.findOne(id);

        if (voter) {
            return voter
        } else {
            throw new CustomException(401, "Voter Not Found")
        }
    }

    /**
     * 
     * @param id 
     */
    async remove(id: string): Promise<void> {
        await this.votersRepository.delete(id);
    }

    /**
     * 
     * @param voter 
     */
    async create(voter: VoterDto): Promise<VoterEntity> {
        let voterInstance: VoterEntity = this.votersRepository.create({
            email: voter.email,
            location: voter.location
        })
        let newVoter: VoterEntity = await this.votersRepository.save(voterInstance);

        return newVoter;
    }

    /**
     * 
     * @param id 
     * @param voter 
     */
    async update(id: number, voter: VoterDto): Promise<void> {
        let updatedVoter: UpdateResult = await this.votersRepository.update({ id: id }, { ...voter });
        console.log(updatedVoter.affected)
        if (updatedVoter.affected < 1) {
            throw new CustomException(501, "Voter Details unchanged")
        }
    }
}
