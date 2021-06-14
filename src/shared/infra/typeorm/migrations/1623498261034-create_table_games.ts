import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createTableGames1623498261034
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'platform',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'played_hours',
            type: 'decimal(6,2)',
            default: 0,
          },
          {
            name: 'img_path',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'finished',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
