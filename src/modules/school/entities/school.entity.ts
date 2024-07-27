import { BaseEntity } from '../../../config/base.entity';
import { Course } from '../../course/entities/course.entity';
import { User } from '../../user/entities/user.entity';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
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

  @Column({ name: 'owner_id' })
  ownerId: number;

  @ManyToOne(() => User, (user) => user.school, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'owner_id' })
  owner: User;

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
