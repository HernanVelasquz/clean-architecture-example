import { Module } from '@nestjs/common';
import { MongoDataServiceModule } from '../framework';

@Module({
  imports: [MongoDataServiceModule],
  exports: [MongoDataServiceModule],
})
export class DataServicesModule {}
