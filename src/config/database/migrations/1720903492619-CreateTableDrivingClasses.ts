import { DrivingClassStatus } from 'src/modules/driving-class/enums/driving-class-status.enum';
import { DrivingClassType } from 'src/modules/driving-class/enums/driving-class-type.enum';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableDrivingClasses1720903492619
  implements MigrationInterface
{
  private drivingClassesTable = new Table({
    name: 'driving_classes',
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
        name: 'description',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'duration',
        type: 'INTEGER',
      },
      {
        name: 'date',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'location',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'isActive',
        type: 'BOOLEAN',
        default: true,
      },
      {
        name: 'type',
        type: 'enum',
        enum: Object.keys(DrivingClassType),
        default: `'${DrivingClassType.PRACTICAL}'`,
      },
      {
        name: 'status',
        type: 'enum',
        enum: Object.keys(DrivingClassStatus),
        default: `'${DrivingClassStatus.PENDING}'`,
      },
      {
        name: 'teacher_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'course_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'vehicle_id',
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

  private vehicleFreignKey = new TableForeignKey({
    columnNames: ['vehicle_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'vehicles',
    onDelete: 'CASCADE',
  });

  private teacherFreignKey = new TableForeignKey({
    columnNames: ['teacher_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
  });

  private courseFreignKey = new TableForeignKey({
    columnNames: ['course_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'courses',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.drivingClassesTable);
    await queryRunner.createForeignKey(
      'driving_classes',
      this.vehicleFreignKey,
    );
    await queryRunner.createForeignKey(
      'driving_classes',
      this.teacherFreignKey,
    );
    await queryRunner.createForeignKey('driving_classes', this.courseFreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('driving_classes', this.vehicleFreignKey);
    await queryRunner.dropForeignKey('driving_classes', this.teacherFreignKey);
    await queryRunner.dropForeignKey('driving_classes', this.courseFreignKey);
    await queryRunner.dropTable(this.drivingClassesTable);
  }
}
