import { Observable, from } from 'rxjs';
import { GenericResponse } from 'src/domain/types';
import { DependencyAbstractDependency } from './dependency';

export class DeleteUserUseCase extends DependencyAbstractDependency {
  deleteUser(key: string): Observable<GenericResponse<boolean>> {
    return from(this.dataService.user.delete(key));
  }
}
