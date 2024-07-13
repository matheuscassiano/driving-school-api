import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column()
  name: string;

  @Column()
  email: string;
}
