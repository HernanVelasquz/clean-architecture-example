import { Injectable } from '@nestjs/common';
import { DependencyAbstractDependency } from './dependency';
import { UserEntity } from 'src/domain/entities';
import { GenericResponse } from 'src/domain/types';
import { Observable, from } from 'rxjs';

@Injectable()
export class UpdateUserUseCase extends DependencyAbstractDependency {
  updateUser(
    key: string,
    user: UserEntity,
  ): Observable<GenericResponse<UserEntity>> {
    return from(this.dataService.user.update(key, user));
  }
}
