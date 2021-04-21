const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    // env
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),

    // port
    PORT: Joi.any().default(6000),

    // mongo
    DATABASE_URL: Joi.string().required().description('Database url'),

    DB_URL_DEV: Joi.string().required().description('Database development url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db: {
    db_prod: envVars.DATABASE_URL,
    db_dev: envVars.DB_URL_DEV,
  },
};
