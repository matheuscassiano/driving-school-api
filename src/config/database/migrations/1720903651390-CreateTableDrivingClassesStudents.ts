import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableDrivingClassesStudents1720903651390
  implements MigrationInterface
{
  private drivingClassesStudentsTable = new Table({
    name: 'driving_classes_students',
    columns: [
      {
        name: 'driving_class_id',
        type: 'INTEGER',
        isPrimary: true,
      },
      {
        name: 'student_id',
        type: 'INTEGER',
        isPrimary: true,
      },
    ],
  });

  private drivingClassesStudentsForeignKeyDrivingClass = new TableForeignKey({
    columnNames: ['driving_class_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'driving_classes',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  private drivingClassesStudentsForeignKeyUser = new TableForeignKey({
    columnNames: ['student_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.drivingClassesStudentsTable);
    await queryRunner.createForeignKey(
      'driving_classes_students',
      this.drivingClassesStudentsForeignKeyDrivingClass,
    );
    await queryRunner.createForeignKey(
      'driving_classes_students',
      this.drivingClassesStudentsForeignKeyUser,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'driving_classes_students',
      this.drivingClassesStudentsForeignKeyDrivingClass,
    );
    await queryRunner.dropForeignKey(
      'driving_classes_students',
      this.drivingClassesStudentsForeignKeyUser,
    );
    await queryRunner.dropTable(this.drivingClassesStudentsTable);
  }
}
