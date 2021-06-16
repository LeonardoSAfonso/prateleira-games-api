import { MigrationInterface, QueryRunner } from 'typeorm';

export default class seedingTableGames1623534632641
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into games(name, platform, played_hours, img_url) values ('Resident Evil 4', 'Playstation 2', 14, 'https://static.metacritic.com/images/products/games/2/1b1a9d67d4ef046b5320670c890849cb-78.jpg'), ('Pokémon HeartGold', 'Nintendo DS', 8, 'https://static.metacritic.com/images/products/games/1/ea34d50166d49ca4af645e85e89d5804-78.jpg')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `delete from games where name in ('Resident Evil 4', 'Pokémon HeartGold')`,
    );
  }
}
