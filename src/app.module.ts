import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CandidateEntity,
  VoteEntity,
  VoterEntity,
  ElectionEntity
} from './entities'

import {
  CandidateService,
  ElectionService,
  VoteService,
  VoterService
} from './services'
import { CandidateController } from './controllers/candidate/candidate.controller';
import { VoterController } from './controllers/voter/voter.controller';
import { VoteController } from './controllers/vote/vote.controller';
import { ElectionController } from './controllers/election/election.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-node-nest.cxpbiuteo4h6.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'babyshark123',
      database: 'voter_nest_db',
      entities: [CandidateEntity, VoteEntity, VoterEntity, ElectionEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CandidateEntity, VoteEntity, VoterEntity, ElectionEntity])
  ],
  controllers: [AppController, CandidateController, VoterController, VoteController, ElectionController],
  providers: [AppService, VoterService, VoteService, CandidateService, ElectionService],
})
export class AppModule { }
