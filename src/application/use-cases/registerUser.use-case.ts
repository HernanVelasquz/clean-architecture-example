import { Injectable } from '@nestjs/common';
import { DependencyAbstractDependency } from './dependency/dependency.abstract';
import { UserEntity } from 'src/domain/entities';
import { Observable, from } from 'rxjs';
import { GenericResponse } from 'src/domain/types';

@Injectable()
export class RegisterUserUseCase extends DependencyAbstractDependency {
  registerUser(user: UserEntity): Observable<GenericResponse<UserEntity>> {
    const newUser = this.userFactory.createUser(user);
    return from(this.dataService.user.save(newUser));
  }
}
