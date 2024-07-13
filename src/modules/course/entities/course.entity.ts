import { BaseEntity } from 'src/config/base.entity';
import { DrivingClass } from 'src/modules/driving-class/entities/driving-class.entity';
import { School } from 'src/modules/school/entities/school.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ICourse } from '../interfaces/course.interface';

@Entity('courses')
export class Course extends BaseEntity implements ICourse {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({ name: 'school_id' })
  schoolId: number;

  @ManyToOne(() => School, (school) => school.courses, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'school_id' })
  school: School;

  @OneToMany(() => DrivingClass, (drivingClass) => drivingClass.course, {
    cascade: true,
    eager: true,
  })
  drivingClasses: DrivingClass[];

  @ManyToMany(() => User, (user) => user.courses)
  users: User[];
}
