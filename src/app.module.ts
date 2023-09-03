import { Module } from '@nestjs/common';
import { DataServicesModule } from './infrastructure/service/data-service.module';
import { UserUseCaseModule } from './application/user-use-case.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [DataServicesModule, UserUseCaseModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
