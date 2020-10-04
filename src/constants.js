module.exports.ACTIONS_TYPES = {
  decode: 'decode',
  encode: 'encode'
};

module.exports.ERROR_TYPES = {
  shift: 'Error: Shift must be a number!',
  action: 'Error: Action must be encode or decode!',
  file: 'Error: No such file!',
  notFile: 'Error: Check your file name!'
};

module.exports.ERROR_CODES = {
  shift: 10,
  action: 11,
  file: 12,
  notFile: 13
};

module.exports.ALPHABET_LETTERS_COUNT = 26;
module.exports.LOWERCASE_MIN_CODE = 97;
module.exports.LOWERCASE_MAX_CODE = 122;
module.exports.UPPERCASE_MIN_CODE = 65;
module.exports.UPPERCASE_MAX_CODE = 90;
