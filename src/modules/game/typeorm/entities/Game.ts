import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export default class Game {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  platform: string;

  @Column()
  played_hours: number;

  @Column()
  finished: number;

  @Column()
  img_path: string;

  @Expose({ name: 'img_url' })
  getAvatarUrl(): string | null {
    return this.img_path
      ? `${process.env.API_URL}/files/${this.img_path}`
      : null;
  }
}
