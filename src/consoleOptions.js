const { program } = require('commander');

const validateConsoleArguments = require('./utils/validateConsoleArguments');

function setConsoleOptions() {
  program
    .storeOptionsAsProperties(false)
    .requiredOption('-s, --shift <number>', 'cipher offset')
    .requiredOption('-a, --action <type>', 'encode or decode action')
    .option('-i, --input <path>', 'input file')
    .option('-o, --output <path>', 'output file')
    .parse(process.argv);
}

function getConsoleArguments() {
  setConsoleOptions();
  const consoleArgs = program.opts();
  validateConsoleArguments(consoleArgs);
  return consoleArgs;
}

module.exports.consoleOptions = getConsoleArguments();
