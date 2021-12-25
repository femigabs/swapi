import 'dotenv/config';

export default {
  DATABASE_URL: process.env.SWAPI_DATABASE_DEV_URL,
  APP_HOST: process.env.SWAPI_APP_HOST,
  APP_PORT: process.env.SWAPI_APP_PORT,
  API_VERSION: process.env.SWAPI_API_VERSION,
};
