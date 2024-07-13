import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';
import { VehicleModel } from '../enums/vehicle-model.enum';
import { VehicleStatus } from '../enums/vehicle-status.enum';
import { VehicleType } from '../enums/vehicle-type.enum';
import { IVehicle } from '../interfaces/vehicles.interface';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';

@Entity('vehicles')
export class Vehicle extends BaseEntity implements IVehicle {
  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  color: string;

  @Column()
  plate: string;

  @Column()
  brand: string;

  @Column()
  model: VehicleModel;

  @Column()
  type: VehicleType;

  @Column()
  status: VehicleStatus;

  @Column()
  drivingClasses: IDrivingClass[];
}
