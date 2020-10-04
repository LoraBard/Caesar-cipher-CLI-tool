const { pipeline } = require('stream');
const fs = require('fs');

const transformStream = require('./utils/transformStream');
const consoleOptions = require('./consoleOptions').consoleOptions;

function startApp() {
  const readStream = consoleOptions.input
    ? fs.createReadStream(consoleOptions.input)
    : process.stdin;

  const writeStream = consoleOptions.output
    ? fs.createWriteStream(consoleOptions.output, { flags: 'a' })
    : process.stdout;

  pipeline(
    readStream,
    transformStream(consoleOptions.action, parseInt(consoleOptions.shift, 10)),
    writeStream,
    err => {
      if (err) {
        process.stderr.write('Action failed.', err);
      } else {
        process.stdout.write(
          `see ${consoleOptions.action}d text in folder ${__dirname}`
        );
      }
    }
  );
}

startApp();
