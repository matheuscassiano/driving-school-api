import { IBase } from 'src/config/base.interface';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { ISchool } from 'src/modules/school/interfaces/school.interface';
import { UserType } from '../enums/user-type.enum';

export interface IUser extends IBase {
  name: string;
  email: string;
  password: string;
  phone: string;
  document: string;
  picture: string;
  type: UserType;
  schoolId?: number;
  school?: ISchool;
  studentOfDrivingClasses?: IDrivingClass[];
  teacherOfDrivingClass?: IDrivingClass;
  courses: ICourse[];
}
