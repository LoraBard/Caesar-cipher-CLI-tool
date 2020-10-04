const fs = require('fs');

const { ACTIONS_TYPES, ERROR_TYPES, ERROR_CODES } = require('../constants');

function showError(error, code) {
  process.exitCode = code;
  process.stderr.write(`${error} Exit with code ${process.exitCode}\n`);
  throw new Error();
}

function checkFileExists(path) {
  path &&
    fs.stat(path, (err, stats) => {
      if (err || stats.isDirectory()) {
        showError(ERROR_TYPES.file, ERROR_CODES.file);
      }
    });
}

module.exports = args => {
  if (!Number.isInteger(+args.shift)) {
    showError(ERROR_TYPES.shift, ERROR_CODES.shift);
  }
  if (!ACTIONS_TYPES[args.action.toLowerCase()]) {
    showError(ERROR_TYPES.action, ERROR_CODES.action);
  }
  checkFileExists(args.input);
  checkFileExists(args.output);
};
