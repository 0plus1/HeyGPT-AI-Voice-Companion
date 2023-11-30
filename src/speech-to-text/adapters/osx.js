import { spawn } from 'child_process';
import { readProfileVariables } from '#root/src/profiles.js';
import { lookForStopWord } from '#root/src/speech-to-text/adapters/helpers.js';

const { LOCALE: SPEECH_TO_TEXT_LOCALE } = readProfileVariables();

const DEBUG = false;

function debugLine(line) {
  if (DEBUG) {
    console.log(line);
  }
}

export async function hear() {
  return new Promise((resolve, reject) => {
    const child = spawn('hear', ['-l', SPEECH_TO_TEXT_LOCALE, '-m']);

    child.stdout.on('data', function (data) {
      debugLine('stdout: ' + data);
      const { text, stopWordFound } = lookForStopWord(data.toString());
      if (stopWordFound) {
        child.kill();
        resolve(text);
      }
    });

    child.stderr.on('data', function (data) {
      debugLine('stderr: ' + data);
    });

    child.on('exit', function (code) {
      reject(new Error('Child process exited with code ' + code));
    });
  });
}
