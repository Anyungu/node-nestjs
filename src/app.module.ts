import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
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

    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get('databse.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [CandidateEntity, VoteEntity, VoterEntity, ElectionEntity],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([CandidateEntity, VoteEntity, VoterEntity, ElectionEntity]),



  ],
  controllers: [CandidateController, VoterController, VoteController, ElectionController],
  providers: [VoterService, VoteService, CandidateService, ElectionService],
})
export class AppModule { }
