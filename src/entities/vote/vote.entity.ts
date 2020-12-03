import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { VoterEntity } from '../voter/voter.entity';
import { ElectionEntity } from '../election/election.entity';
import { CandidateEntity } from '../candidate/candidate.entity';


@Entity('anyungu_vote_entity')
export class VoteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => VoterEntity, voter => voter.id)
    voter_email: VoterEntity;

    @ManyToOne(type => ElectionEntity, election => election.id)
    election_id: ElectionEntity;

    @ManyToOne(type => CandidateEntity, candidate => candidate.id)
    candidate_id: CandidateEntity
}
