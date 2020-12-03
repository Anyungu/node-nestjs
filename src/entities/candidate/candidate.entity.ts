import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ElectionEntity } from '../election/election.entity';


@Entity('anyungu_candidate_entity')
export class CandidateEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @ManyToOne(type => ElectionEntity, election => election.id)
    election: ElectionEntity;
}
