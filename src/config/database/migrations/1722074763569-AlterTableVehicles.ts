import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTableVehicles1722074763569 implements MigrationInterface {
  private pictureColumn = new TableColumn({
    name: 'picture',
    type: 'varchar',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('vehicles', this.pictureColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('vehicles', this.pictureColumn);
  }
}
