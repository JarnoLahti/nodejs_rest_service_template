import express from 'express';
import loggerBuilder from './utils/logger';
import exampleController from './example/exampleController';

function appBuilder() {
  const _logger = loggerBuilder();

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
      _logger.info(`${req.method}: ${req.url}`);
      next();
    });
  }

  app.use(exampleController());

  return Object.freeze(app);
}

export default appBuilder;
