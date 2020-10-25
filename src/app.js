import express from 'express';
import bodyParser from 'body-parser';
import loggerBuilder from './utils/logger';
import exampleController from './example/exampleController';

function appBuilder() {
  const _logger = loggerBuilder();

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

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
