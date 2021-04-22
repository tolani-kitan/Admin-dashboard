/* eslint-disable global-require */
const config = require('./index');

if (config.env === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
