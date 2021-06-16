import { getRepository, Repository } from 'typeorm';
import AppError from '../../../../shared/errors/AppError';
import Game from '../entities/Game';

export default class GameRepository {
  private ormRepository: Repository<Game>;

  constructor() {
    this.ormRepository = getRepository(Game);
  }

  async create(
    name: string,
    platform: string,
    played_hours: number,
    img_url: string,
    finished: number,
  ): Promise<Game> {
    const checkGames = await this.ormRepository.findAndCount({
      where: { finished: 0 },
    });

    if (checkGames[1] >= 5) {
      throw new AppError(
        `You shouldn't play how many games at the same time`,
        409,
      );
    }

    const game = this.ormRepository.create({
      name,
      platform,
      played_hours,
      img_url,
      finished,
    });

    await this.ormRepository.save(game);

    return game;
  }

  async findAll(): Promise<Game[]> {
    const games = await this.ormRepository.find({ where: { finished: 0 } });

    if (!games?.length) {
      throw new AppError(`You don't have registered games.`, 404);
    }

    return games;
  }

  async findFinisheds(): Promise<Game[]> {
    const games = await this.ormRepository.find({ where: { finished: 1 } });

    if (!games?.length) {
      throw new AppError(`You don't have finished games.`, 404);
    }

    return games;
  }

  async findOne(id: number): Promise<Game> {
    const game = await this.ormRepository.findOne(id);

    if (!game) {
      throw new AppError('Game not found.', 404);
    }

    return game;
  }

  async putHours(id: number, played_hours: number): Promise<Game> {
    const game = await this.ormRepository.findOne(id);

    if (!game) {
      throw new AppError('Game not found.', 404);
    }

    game.played_hours = played_hours;

    await this.ormRepository.save(game);

    return game;
  }

  async putFinish(id: number, finished: number): Promise<string> {
    const game = await this.ormRepository.findOne(id);

    if (!game) {
      throw new AppError('Game not found.', 404);
    }

    game.finished = finished;

    await this.ormRepository.save(game);

    return 'Congratulations on finished the game. Game register updated successfully ';
  }

  async delete(id: number): Promise<string> {
    const checkGameExist = await this.ormRepository.findOne(id);

    if (!checkGameExist) {
      throw new AppError('Game not found.', 404);
    }

    await this.ormRepository.delete(id);

    return 'Game deleted successfully.';
  }
}
