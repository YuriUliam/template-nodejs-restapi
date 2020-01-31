import 'dotenv/config';

import Youch from 'youch';
import express from 'express';
import 'express-async-errors';

import routes from './routes';

// Descomente quando for usar o banco de Dados
// import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const error = await new Youch(err, req).toJSON();

        return res
          .status(500)
          .json({ message: 'Internal Server Error', error });
      }

      return res.status(500).json({ message: 'Internal Server Error' });
    });
  }
}

export default new App().server;
