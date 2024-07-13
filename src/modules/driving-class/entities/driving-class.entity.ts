import { BaseEntity } from 'src/config/base.entity';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { IVehicle } from 'src/modules/vehicle/interfaces/vehicles.interface';
import { Column, Entity } from 'typeorm';
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

  @Column()
  isActive: boolean;

  @Column()
  type: DrivingClassType;

  @Column()
  status: DrivingClassStatus;

  // Adicionar relação ManyToMany com a entidade de Usuários
  @Column()
  students: IUser[];

  // Adicionar relação com a entidade de Usuários
  @Column()
  teacherId: number;

  @Column()
  teacher: IUser;

  // Adicionar relação ManyToOne com a entidade de Cursos
  @Column({ name: 'course_id' })
  courseId: number;

  @Column()
  course: ICourse;

  @Column({ name: 'vehicle_id' })
  vehicleId?: number;

  @Column()
  vehicle?: IVehicle;
}
