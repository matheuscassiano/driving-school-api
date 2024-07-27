import { IBase } from 'src/config/base.interface';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { IVehicle } from 'src/modules/vehicle/interfaces/vehicles.interface';

export interface ISchool extends IBase {
  name: string;
  description: string;
  document: string;
  phone: string;
  email: string;
  location: string;
  courses: ICourse[];
  vehicles: IVehicle[];
  users: IUser[];
}
