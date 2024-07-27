import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTableSchoolsFKOwner1721224606768
  implements MigrationInterface
{
  private ownerColumn = new TableColumn({
    name: 'owner_id',
    type: 'INTEGER',
    isNullable: false,
  });

  private schoolOwnerForeignKey = new TableForeignKey({
    columnNames: ['owner_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('schools', this.ownerColumn);
    await queryRunner.createForeignKey('schools', this.schoolOwnerForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('schools', this.schoolOwnerForeignKey);
    await queryRunner.dropColumn('schools', this.ownerColumn);
  }
}
