import { Injectable } from '@nestjs/common';
import { DependencyAbstractDependency } from './dependency/dependency.abstract';
import { Observable, from } from 'rxjs';
import { UserEntity } from 'src/domain/entities';
import { GenericResponse } from 'src/domain/types';

@Injectable()
export class GetAllUserUseCase extends DependencyAbstractDependency {
  getAllUser(): Observable<GenericResponse<UserEntity>> {
    return from(this.dataService.user.getAll());
  }
}
