import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class UserFactoryService {
  createUser(user: UserEntity): UserEntity {
    const newUser = new UserEntity();
    newUser.name = user.name;
    newUser.age = user.age;
    newUser.email = user.email;
    return newUser;
  }

  updateUser(user: UserEntity): UserEntity {
    const updateUser = new UserEntity();
    updateUser.name = user.name;
    updateUser.age = user.age;
    updateUser.email = user.email;
    return updateUser;
  }
}
