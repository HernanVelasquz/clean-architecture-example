import { UserEntity } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataService {
  abstract user: IGenericRepository<string, UserEntity>;
}
