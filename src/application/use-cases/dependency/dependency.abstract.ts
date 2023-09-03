import { UserFactoryService } from 'src/application/factories/user-factory.service';
import { IDataService } from 'src/domain/abstracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class DependencyAbstractDependency {
  constructor(
    protected readonly dataService: IDataService,
    protected readonly userFactory: UserFactoryService,
  ) {}
}
