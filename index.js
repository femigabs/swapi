import express from 'express';
import config, { appConfig } from './src/config';
import db from './src/db/index';

const app = express();
const host = config.APP_HOST;
const port = config.APP_PORT || 8080;
const apiVersion = config.API_VERSION;

appConfig(app);

db.connect()
  .then((obj) => {
    app.listen(port, () => {
      obj.done();
      logger.info(`Server started at ${host}:${port}/api/${apiVersion}/`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

export default app;
