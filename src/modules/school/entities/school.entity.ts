import { BaseEntity } from 'src/config/base.entity';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import { Column, Entity } from 'typeorm';
import { ISchool } from '../interfaces/school.interface';

@Entity('schools')
export class School extends BaseEntity implements ISchool {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  // Adcionar relalção com a entidade Course
  @Column()
  courses: ICourse[];

  // Adcionar relalção com a entidade Vehicle
  @Column()
  vehicles: Vehicle[];

  // Adcionar relalção com a entidade User
  @Column()
  users: User[];
}
