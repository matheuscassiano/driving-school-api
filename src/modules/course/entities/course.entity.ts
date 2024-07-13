import { BaseEntity } from 'src/config/base.entity';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { Column, Entity } from 'typeorm';
import { ICourse } from '../interfaces/course.interface';

@Entity('courses')
export class Course extends BaseEntity implements ICourse {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  isActive: boolean;

  // Adicionar relação ManyToOne com a entidade de Aulas
  @Column()
  drivingClasses: IDrivingClass[];

  // Adicionar relação ManyToOne com a entidade de Usuários
  @Column()
  users: IUser[];
}
