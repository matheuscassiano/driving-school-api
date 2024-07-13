import { BaseEntity } from 'src/config/base.entity';
import { IDrivingClass } from 'src/modules/driving-class/interfaces/driving-class.interface';
import { ISchool } from 'src/modules/school/interfaces/school.interface';
import { Column, Entity } from 'typeorm';
import { VehicleModel } from '../enums/vehicle-model.enum';
import { VehicleStatus } from '../enums/vehicle-status.enum';
import { VehicleType } from '../enums/vehicle-type.enum';
import { IVehicle } from '../interfaces/vehicles.interface';

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
  schoolId: number;

  // Adicionar relação ManyToOne com a entidade de Escolas
  @Column()
  school: ISchool;

  @Column()
  drivingClasses: IDrivingClass[];
}
