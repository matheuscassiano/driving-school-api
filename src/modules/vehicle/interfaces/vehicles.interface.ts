import { IBase } from 'src/config/base.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { ISchool } from 'src/modules/school/interfaces/school.interface';
import { VehicleCategory } from '../enums/vehicle-model.enum';
import { VehicleStatus } from '../enums/vehicle-status.enum';
import { VehicleType } from '../enums/vehicle-type.enum';

export interface IVehicle extends IBase {
  year: number;
  color: string;
  plate: string;
  brand: string;
  model: string;
  picture?: string;
  category: VehicleCategory;
  type: VehicleType;
  status: VehicleStatus;
  schoolId: number;
  school: ISchool;
  drivingClasses: IDrivingClass[];
}
