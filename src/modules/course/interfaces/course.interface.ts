import { IBase } from 'src/config/base.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { ISchool } from 'src/modules/school/interfaces/school.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';

export interface ICourse extends IBase {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  schoolId: number;
  school: ISchool;
  drivingClasses: IDrivingClass[];
  users: IUser[];
}
