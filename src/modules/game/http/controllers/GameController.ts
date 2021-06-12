import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import GameRepository from '../../typeorm/repositories/GameRepository';

export default class GameController {
  public async create(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const { name, platform, played_hours } = req.body;

    const game = await gameRepository.create(name, platform, played_hours);

    return res.json(classToClass(game));
  }

  public async upload(req: Request, res: Response): Promise<Response> {
    const authorRepository = new GameRepository();

    const { id } = req.params;

    const capaFilename = req.file.filename;

    const game = await authorRepository.upload(Number(id), capaFilename);

    return res.json(classToClass(game));
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const games = await gameRepository.findAll();

    return res.json(classToClass(games));
  }

  public async findFinished(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const games = await gameRepository.findFinisheds();

    return res.json(classToClass(games));
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const { id } = req.params;

    const game = await gameRepository.findOne(Number(id));

    return res.json(classToClass(game));
  }

  public async putHours(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const { id, played_hours } = req.body;

    const game = await gameRepository.putHours(id, played_hours);

    return res.json(classToClass(game));
  }

  public async putFinish(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const { id, finished } = req.body;

    const game = await gameRepository.putFinish(id, finished);

    return res.json(classToClass(game));
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const gameRepository = new GameRepository();

    const { id } = req.params;

    const game = await gameRepository.delete(Number(id));

    return res.json(game);
  }
}
