import { IBase } from 'src/config/base.interface';
import { ICourse } from 'src/modules/course/interfaces/course.interface';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';

export interface ISchool extends IBase {
  name: string;
  description: string;
  document: string;
  phone: string;
  email: string;
  location: string;
  courses: ICourse[];
  vehicles: Vehicle[];
  users: User[];
}
