import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { GetUserByIdUseCase } from 'src/application/use-cases';
import { DeleteUserUseCase } from 'src/application/use-cases/deleteUser.use-case';
import { UpdateUserUseCase } from 'src/application/use-cases/updateUser.use-case';
import { UserEntity } from 'src/domain/entities';
import { GenericResponse } from 'src/domain/types';
import { GetAllUserUseCase } from '../application/use-cases/getAllUser.use-case';
import { RegisterUserUseCase } from '../application/use-cases/registerUser.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly getAllUserUseCase: GetAllUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  getAllUser() {
    return from(this.getAllUserUseCase.getAllUser());
  }

  @Get(':id')
  getByIdUser(@Param('id') id: string) {
    return from(this.getUserByIdUseCase.getUserById(id));
  }

  @Post()
  registerUser(@Body() user: any): Observable<GenericResponse<UserEntity>> {
    return from(this.registerUserUseCase.registerUser(user));
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return from(this.updateUserUseCase.updateUser(id, user));
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return from(this.deleteUserUseCase.deleteUser(id));
  }
}
