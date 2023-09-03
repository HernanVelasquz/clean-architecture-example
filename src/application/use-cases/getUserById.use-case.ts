import { Injectable, NotFoundException } from '@nestjs/common';
import { DependencyAbstractDependency } from './dependency/dependency.abstract';
import { Observable, from, map } from 'rxjs';

import { GenericResponse } from 'src/domain/types';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class GetUserByIdUseCase extends DependencyAbstractDependency {
  getUserById(key: string): Observable<GenericResponse<UserEntity>> {
    return from(this.dataService.user.get(key)).pipe(
      map((result) => {
        if (result) return result;
        throw new NotFoundException(`user by id ${key} not found`);
      }),
    );
  }
}
