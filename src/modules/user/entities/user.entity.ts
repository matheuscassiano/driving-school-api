import { BaseEntity } from 'src/config/base.entity';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { Column, Entity } from 'typeorm';
import { UserType } from '../enums/user-type.enum';
import { IUser } from '../interfaces/user.interface';
import { ISchool } from 'src/modules/school/interfaces/school.interface';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column()
  name: string;

  email: string;

  @Column()
  password: string;

  @Column()
  picurte: string;

  @Column()
  schoolId: number;

  // Adicionar relação ManyToOne com a entidade de Escolas
  @Column()
  school: ISchool;

  // Adicionar relação ManyToMany com a entidade de Aulas
  @Column()
  drivingClasses: IDrivingClass[];

  // Adicionar relação ManyToMany com a entidade de Cursos
  @Column()
  courses: ICourse[];

  @Column()
  type: UserType;
}
