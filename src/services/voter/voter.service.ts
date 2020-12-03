import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VoterDto } from 'src/dtos/voter/voter.dto';
import { Repository } from 'typeorm';
import { VoterEntity } from '../../entities/voter/voter.entity';


@Injectable()
export class VoterService {

    constructor(
        @InjectRepository(VoterEntity)
        private votersRepository: Repository<VoterEntity>,
    ) { }


    findAll(): Promise<VoterEntity[]> {
        return this.votersRepository.find();
    }

    findOne(id: number): Promise<VoterEntity> {
        return this.votersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.votersRepository.delete(id);
    }

    create(voter: VoterDto): Promise<VoterEntity> {
        let voterInstance: VoterEntity = this.votersRepository.create({
            email: voter.email,
            location: voter.location
        })
        return this.votersRepository.save(voterInstance)
    }

    async update(id: number, voter: VoterDto): Promise<void> {


        await this.votersRepository.update({ id: id }, { ...voter });

    }
}
