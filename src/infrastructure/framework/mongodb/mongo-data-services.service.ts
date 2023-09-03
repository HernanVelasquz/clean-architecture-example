import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IDataService, IGenericRepository } from 'src/domain/abstracts';
import { UserEntity } from 'src/domain/entities';
import { UserDocument, UserModel } from './model';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataService implements IDataService, OnApplicationBootstrap {
  user: IGenericRepository<string, UserEntity>;
  constructor(
    @InjectModel(UserModel.name)
    private UserRepository: Model<UserDocument>,
  ) {}
  onApplicationBootstrap() {
    this.user = new MongoGenericRepository<string, UserModel>(
      this.UserRepository,
    );
  }
}
