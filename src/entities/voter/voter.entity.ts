import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('anyungu_voter_entity')
export class VoterEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    location: string

}
