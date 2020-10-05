const { Transform } = require('stream');
const caesarCipher = require('../CaesarCipher');

module.exports = (action, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      chunk = chunk.toString('utf8');
      callback(null, caesarCipher(action, chunk, shift));
    }
  });
};
