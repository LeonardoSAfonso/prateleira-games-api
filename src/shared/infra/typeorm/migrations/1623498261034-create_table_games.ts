import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createTableGames1623498261034
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "games" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "platform" varchar NOT NULL, "played_hours" decimal(6,2) NOT NULL DEFAULT (0), "img_url" varchar, "finished" integer NOT NULL DEFAULT (0), "created_at" time NOT NULL DEFAULT (Date('now')), "updated_at" time NOT NULL DEFAULT (Date('now')))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
