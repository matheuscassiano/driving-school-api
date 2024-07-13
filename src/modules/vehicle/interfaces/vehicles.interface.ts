import { IBase } from 'src/config/base.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { VehicleModel } from '../enums/vehicle-model.enum';
import { VehicleStatus } from '../enums/vehicle-status.enum';
import { VehicleType } from '../enums/vehicle-type.enum';

export interface IVehicle extends IBase {
  name: string;
  year: number;
  color: string;
  plate: string;
  brand: string;
  model: VehicleModel;
  type: VehicleType;
  status: VehicleStatus;
  drivingClasses: IDrivingClass[];
}
