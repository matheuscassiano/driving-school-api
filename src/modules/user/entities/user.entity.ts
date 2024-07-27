import { BaseEntity } from '../../../config/base.entity';
import { Course } from '../../course/entities/course.entity';
import { DrivingClass } from '../../driving-class/entities/driving-class.entity';
import { School } from '../../school/entities/school.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { UserType } from '../enums/user-type.enum';
import { IUser } from '../interfaces/user.interface';

@Entity('users')
export class User extends BaseEntity implements IUser {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  document: string;

  @Column()
  picture: string;

  @Column()
  type: UserType;

  @Column({ name: 'school_id' })
  schoolId: number;

  @ManyToOne(() => School, (school) => school.users, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'school_id' })
  school: School;

  @ManyToMany(() => Course, (course) => course.users)
  courses: Course[];

  // Validar relação entre usuarios (teachers e students) e aulas de direção
  @ManyToMany(() => DrivingClass, (driving) => driving.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'driving_classes_students',
    joinColumn: { name: 'student_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'driving_class_id', referencedColumnName: 'id' },
  })
  studentOfDrivingClasses?: DrivingClass[];

  @ManyToMany(() => DrivingClass, (driving) => driving.teacher)
  @JoinTable()
  teacherOfDrivingClass?: DrivingClass;
}
