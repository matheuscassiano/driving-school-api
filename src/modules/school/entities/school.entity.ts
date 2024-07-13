import { BaseEntity } from 'src/config/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ISchool } from '../interfaces/school.interface';

@Entity('schools')
export class School extends BaseEntity implements ISchool {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  document: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @OneToMany(() => Course, (course) => course.school, {
    cascade: true,
    eager: true,
  })
  courses: Course[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.school, {
    cascade: true,
    eager: true,
  })
  vehicles: Vehicle[];

  @OneToMany(() => User, (user) => user.school, {
    cascade: true,
    eager: true,
  })
  users: User[];
}
