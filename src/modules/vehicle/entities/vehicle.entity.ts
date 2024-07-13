import { BaseEntity } from 'src/config/base.entity';
import { DrivingClass } from 'src/modules/driving-class/entities/driving-class.entity';
import { School } from 'src/modules/school/entities/school.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
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

  @Column({ name: 'school_id' })
  schoolId: number;

  @ManyToOne(() => School, (school) => school.vehicles, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'school_id' })
  school: School;

  @OneToMany(() => DrivingClass, (drivingClass) => drivingClass.vehicle, {
    cascade: true,
    eager: true,
  })
  drivingClasses: DrivingClass[];
}
