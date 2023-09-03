import { Model } from 'mongoose';
import { Observable, from, map } from 'rxjs';
import { IGenericRepository } from 'src/domain/abstracts';
import { GenericResponse } from 'src/domain/types';

export class MongoGenericRepository<G, T> implements IGenericRepository<G, T> {
  private _repository: Model<T>;
  constructor(repository: Model<T>) {
    this._repository = repository;
  }
  getAll(): Observable<GenericResponse<T>> {
    return from(this._repository.find().exec());
  }
  get(key: G): Observable<GenericResponse<T>> {
    return from(this._repository.findById(key).exec());
  }
  save(item: T): Observable<GenericResponse<T>> {
    return from(this._repository.create(item));
  }
  update(key: G, item: T): Observable<GenericResponse<T>> {
    return from(this._repository.findByIdAndUpdate(key, item));
  }
  delete(key: G): Observable<GenericResponse<boolean>> {
    return from(this._repository.findByIdAndDelete(key)).pipe(
      map((result) => {
        return !!result;
      }),
    );
  }
}
