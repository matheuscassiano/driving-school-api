import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableSchools1720871348977 implements MigrationInterface {
  private schoolsTable = new Table({
    name: 'schools',
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
        name: 'document',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'phone',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'email',
        type: 'VARCHAR',
        length: '255',
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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.schoolsTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.schoolsTable);
  }
}
