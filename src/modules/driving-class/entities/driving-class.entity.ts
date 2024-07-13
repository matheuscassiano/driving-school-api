import { BaseEntity } from 'src/config/base.entity';
import { Course } from 'src/modules/course/entities/course.entity';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { DrivingClassStatus } from '../enums/driving-class-status.enum';
import { DrivingClassType } from '../enums/driving-class-type.enum';

@Entity('driving_classes')
export class DrivingClass extends BaseEntity implements IDrivingClass {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column()
  type: DrivingClassType;

  @Column()
  status: DrivingClassStatus;

  // Adicionar relação ManyToMany com a entidade de Usuários
  @ManyToMany(() => User, (user) => user.studentOfDrivingClasses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'driving_classes_students',
    joinColumn: { name: 'driving_class_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'student_id', referencedColumnName: 'id' },
  })
  students: User[];

  // Adicionar relação com a entidade de Usuários
  @Column({ name: 'teacher_id' })
  teacherId: number;

  @ManyToOne(() => User, (User) => User.teacherOfDrivingClass, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'teacher_id' })
  teacher: User;

  @Column({ name: 'course_id' })
  courseId: number;

  @ManyToOne(() => Course, (course) => course.drivingClasses, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({ name: 'vehicle_id' })
  vehicleId?: number;

  @ManyToOne(() => Vehicle, (Vehicle) => Vehicle.drivingClasses, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle?: Vehicle;
}
