import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModel, UserSchema } from './model';
import { IDataService } from 'src/domain/abstracts';
import { MongoDataService } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://hernanvelasquez:6D6MGV8Cil9AcJM9@example.ykte91l.mongodb.net/user',
    ),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: MongoDataService,
    },
  ],
  exports: [IDataService],
})
export class MongoDataServiceModule {}
