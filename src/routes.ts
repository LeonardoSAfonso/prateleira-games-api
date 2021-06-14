import { Router } from 'express';
import gameRouter from './modules/game/http/routes/Game.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});
routes.use('/', gameRouter);

export default routes;
