import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserEntity } from 'src/domain/entities';
import { v4 as uuidV4 } from 'uuid';

export type UserDocument = UserModel & Document;

@Schema({ collection: 'User' })
export class UserModel extends UserEntity {
  @Prop({
    default: () => uuidV4(),
    unique: true,
    name: 'UUID',
    type: 'string',
    index: true,
  })
  id: string;
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
