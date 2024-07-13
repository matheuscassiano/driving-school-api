import { IBase } from 'src/config/base.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { UserType } from '../enums/user-type.enum';

export interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  picurte: string;
  userType: UserType;
  drivingClasses: IDrivingClass[];
}
