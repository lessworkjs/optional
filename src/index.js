const Optional = require('./Optional');

module.exports = (value, callback) => {
  if (!callback) {
    return new Optional(value);
  }

  if (value) {
    return callback(value);
  }

  return null;
};