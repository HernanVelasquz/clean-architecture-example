import { Observable } from 'rxjs';
import { GenericResponse } from '../types';

export abstract class IGenericRepository<G, T> {
  abstract getAll(): Observable<GenericResponse<T>>;
  abstract get(key: G): Observable<GenericResponse<T>>;
  abstract save(item: T): Observable<GenericResponse<T>>;
  abstract update(key: G, item: T): Observable<GenericResponse<T>>;
  abstract delete(key: G): Observable<GenericResponse<boolean>>;
}
