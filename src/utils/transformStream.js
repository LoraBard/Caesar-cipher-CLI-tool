const { Transform } = require('stream');
const CaesarCipher = require('../CaesarCipher');

module.exports = (action, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      chunk = chunk.toString('utf8');
      const obj = new CaesarCipher();
      callback(null, obj.getText(action, chunk, shift));
    }
  });
};
