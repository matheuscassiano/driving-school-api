import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableCourses1720872792644 implements MigrationInterface {
  private coursesTable = new Table({
    name: 'courses',
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
        name: 'start_date',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'end_date',
        type: 'TIMESTAMP',
      },
      {
        name: 'is_active',
        type: 'BOOLEAN',
        default: true,
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
    await queryRunner.createTable(this.coursesTable);
    await queryRunner.createForeignKey('courses', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.coursesTable);
    await queryRunner.dropForeignKey('courses', this.foreignKey);
  }
}
