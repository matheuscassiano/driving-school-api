import { IBase } from 'src/config/base.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { IVehicle } from 'src/modules/vehicles/interfaces/vehicles.interface';
import { DrivingClassType } from '../enums/driving-class-type.enum';
import { DrivingClassStatus } from '../enums/driving-class-status.enum';

export interface IDrivingClass extends IBase {
  name: string;
  description: string;
  duration: number;
  location: string;
  date: Date;
  teacher: IUser;
  students: IUser[];
  vehicle?: IVehicle;
  type: DrivingClassType;
  status: DrivingClassStatus;
}
