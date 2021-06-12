import { MigrationInterface, QueryRunner } from 'typeorm';

export default class seedingTableGames1623534632641
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into games(name, platform, played_hours, img_path) values ('Resident Evil 4', 'Playstation 2', 14, 'be202f3f56d5c19d1aea.jpg'), ('Pokémon HeartGold', 'Nintendo DS', 8, 'f8da6117f97eff9d5c35.jpg')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `delete from games where name in ('Resident Evil 4', 'Pokémon HeartGold')`,
    );
  }
}
