import { UserType } from 'src/modules/user/enums/user-type.enum';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUsers1720873163710 implements MigrationInterface {
  private usersTable = new Table({
    name: 'users',
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
        name: 'email',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'password',
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
        name: 'picture',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'school_id',
        type: 'INTEGER',
        isNullable: true,
      },
      {
        name: 'type',
        type: 'enum',
        enum: Object.keys(UserType),
        default: `'${UserType.STUDENT}'`,
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
    await queryRunner.createTable(this.usersTable);
    await queryRunner.createForeignKey('users', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.usersTable);
    await queryRunner.dropForeignKey('users', this.foreignKey);
  }
}
