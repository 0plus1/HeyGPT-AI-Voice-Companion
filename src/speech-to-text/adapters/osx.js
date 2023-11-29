import { spawn } from 'child_process';
import { readProfileVariables } from '#root/src/profiles.js';

const { LOCALE: SPEECH_TO_TEXT_LOCALE, SPEECH_TO_TEXT_STOP_WORD } = readProfileVariables();

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
      if (data.toString().includes(SPEECH_TO_TEXT_STOP_WORD)) {
        child.kill();
        resolve(data.toString().replace(new RegExp(SPEECH_TO_TEXT_STOP_WORD + '$'), ''));
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
