import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/service/data-service.module';
import { UserFactoryService } from './factories';
import {
  GetUserByIdUseCase,
  RegisterUserUseCase,
  GetAllUserUseCase,
} from './use-cases';
import { UpdateUserUseCase } from './use-cases/updateUser.use-case';
import { DeleteUserUseCase } from './use-cases/deleteUser.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [
    UserFactoryService,
    GetAllUserUseCase,
    GetUserByIdUseCase,
    RegisterUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
  exports: [
    UserFactoryService,
    GetAllUserUseCase,
    GetUserByIdUseCase,
    RegisterUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserUseCaseModule {}
