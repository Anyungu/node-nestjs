import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('anyungu_election_entity')
export class ElectionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: number;

}
