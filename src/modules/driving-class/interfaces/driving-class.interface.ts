import { IBase } from 'src/config/base.interface';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { IVehicle } from 'src/modules/vehicle/interfaces/vehicles.interface';
import { DrivingClassStatus } from '../enums/driving-class-status.enum';
import { DrivingClassType } from '../enums/driving-class-type.enum';

export interface IDrivingClass extends IBase {
  name: string;
  description: string;
  duration: number;
  location: string;
  date: Date;

  teacherId: number;
  teacher: IUser;

  students: IUser[];

  courseId: number;
  course: ICourse;

  vehicleId?: number;
  vehicle?: IVehicle;

  type: DrivingClassType;
  status: DrivingClassStatus;
}
