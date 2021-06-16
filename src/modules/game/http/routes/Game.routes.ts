import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import GameController from '../controllers/GameController';

const gameRouter = Router();

const gameController = new GameController();

gameRouter.post(
  '/game',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      platform: Joi.string().required(),
      played_hours: Joi.number().required(),
      img_url: Joi.string().required(),
    },
  }),
  gameController.create,
);

gameRouter.get('/games', gameController.findAll);

gameRouter.get('/finished-games', gameController.findFinished);

gameRouter.get(
  '/game/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.number().integer().required() } }),
  gameController.findOne,
);

gameRouter.put(
  '/game/hours',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().integer().required(),
      played_hours: Joi.number().required(),
    },
  }),
  gameController.putHours,
);

gameRouter.put(
  '/finish-game',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().integer().required(),
      finished: Joi.number().integer().required(),
    },
  }),
  gameController.putFinish,
);

gameRouter.delete(
  '/game/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.number().integer().required() } }),
  gameController.delete,
);

export default gameRouter;
