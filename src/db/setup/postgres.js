/* eslint-disable import/no-cycle */
import promise from 'bluebird';
import pg from 'pg-promise';
import config from '../../config';

const options = {
  promiseLib: promise,
};

const pgp = pg(options);
const db = pgp(config.DATABASE_URL);

export default db;
