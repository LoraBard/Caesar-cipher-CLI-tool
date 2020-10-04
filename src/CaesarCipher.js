const constants = require('./constants');

class CaesarCipher {
  getText(action, str, offset) {
    if (offset < 0) {
      return this.getText(
        action,
        str,
        offset + constants.ALPHABET_LETTERS_COUNT
      );
    }
    const shift = offset % constants.ALPHABET_LETTERS_COUNT;
    if (action === constants.ACTIONS_TYPES.encode) {
      return this.caesarCipherHelper(
        str,
        (currentLetterCode, alphabetLetterMinCode) =>
          ((currentLetterCode - alphabetLetterMinCode + shift) %
            constants.ALPHABET_LETTERS_COUNT) +
          alphabetLetterMinCode
      );
    }
    return this.caesarCipherHelper(
      str,
      (currentLetterCode, alphabetLetterMinCode) =>
        ((currentLetterCode -
          alphabetLetterMinCode -
          shift +
          constants.ALPHABET_LETTERS_COUNT) %
          constants.ALPHABET_LETTERS_COUNT) +
        alphabetLetterMinCode
    );
  }

  getTextHelper(str, countCodeCallback) {
    let outString = '';
    for (let i = 0; i < str.length; ++i) {
      let code = str.charCodeAt(i);
      if (
        code >= constants.LOWERCASE_MIN_CODE &&
        code <= constants.LOWERCASE_MAX_CODE
      ) {
        code = countCodeCallback(code, constants.LOWERCASE_MIN_CODE);
      } else if (
        code >= constants.UPPERCASE_MIN_CODE &&
        code <= constants.UPPERCASE_MAX_CODE
      ) {
        code = countCodeCallback(code, constants.UPPERCASE_MIN_CODE);
      }
      outString += String.fromCharCode(code);
    }
    return `${outString}\n`;
  }
}

module.exports = CaesarCipher;
