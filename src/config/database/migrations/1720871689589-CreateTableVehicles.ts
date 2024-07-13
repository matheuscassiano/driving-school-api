import { VehicleModel } from 'src/modules/vehicle/enums/vehicle-model.enum';
import { VehicleStatus } from 'src/modules/vehicle/enums/vehicle-status.enum';
import { VehicleType } from 'src/modules/vehicle/enums/vehicle-type.enum';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableVehicles1720871689589 implements MigrationInterface {
  private vehiclesTable = new Table({
    name: 'vehicles',
    columns: [
      {
        name: 'id',
        type: 'SERIAL',
        isPrimary: true,
      },
      {
        name: 'name',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'year',
        type: 'INTEGER',
      },
      {
        name: 'plate',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'brand',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'color',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'model',
        type: 'enum',
        enum: Object.keys(VehicleModel),
        default: `'${VehicleModel.SUV}'`,
      },
      {
        name: 'type',
        type: 'enum',
        enum: Object.keys(VehicleType),
        default: `'${VehicleType.CAR}'`,
      },
      {
        name: 'status',
        type: 'enum',
        enum: Object.keys(VehicleStatus),
        default: `'${VehicleStatus.AVAILABLE}'`,
      },
      {
        name: 'school_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'updated_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'deleted_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
    ],
  });

  private foreignKey = new TableForeignKey({
    columnNames: ['school_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'schools',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.vehiclesTable);
    await queryRunner.createForeignKey('vehicles', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('vehicles', this.foreignKey);
    await queryRunner.dropTable(this.vehiclesTable);
  }
}
