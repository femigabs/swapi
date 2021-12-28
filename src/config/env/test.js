import 'dotenv/config';

export default {
  DATABASE_URL: process.env.SWAPI_DATABASE_TEST_URL,
  APP_HOST: process.env.SWAPI_APP_HOST,
  PORT: process.env.SWAPI_APP_PORT,
  API_VERSION: process.env.SWAPI_API_VERSION,
  NODE_ENV: process.env.SWAPI_NODE_ENV,
};
