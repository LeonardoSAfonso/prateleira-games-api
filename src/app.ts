import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import routes from './routes';

import './shared/infra/typeorm/index';
import AppError from './shared/errors/AppError';
import multer from './config/multer';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/files', express.static(multer.uploadsFolder));

app.use(cors(), (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
