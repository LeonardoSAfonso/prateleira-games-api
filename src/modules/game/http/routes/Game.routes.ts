import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../../../config/multer';
import GameController from '../controllers/GameController';

const gameRouter = Router();

const gameController = new GameController();

const upload = multer(multerConfig);

gameRouter.post(
  '/game',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      platform: Joi.string().required(),
      played_hours: Joi.number(),
    },
  }),
  gameController.create,
);

gameRouter.patch(
  '/capa/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.number().integer().required() } }),
  upload.single('file'),
  gameController.upload,
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
      finished: Joi.boolean().required(),
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
