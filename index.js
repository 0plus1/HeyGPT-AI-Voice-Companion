import { dispatch, initOpenAI } from '#root/src/openai.js';
import { textToSpeech } from '#root/src/text-to-speech/index.js';
import { speechToText } from "#root/src/speech-to-text/index.js";
import { readProfileVariables } from '#root/src/profiles.js';

const { USER_PROMPT } = readProfileVariables();
const NEWLINE = "\n\n";
// Initialise variables
let loop = true;
// We need to lock the microphone until the speech has ended
let lock = false;
// Initialise OpenAI
initOpenAI();

// read cli argument
async function hear() {
  const userInput = await speechToText();
  console.log(userInput);
  return userInput;
}
async function say(gptOutput) {
  console.log(gptOutput);
  await textToSpeech(gptOutput);
  return gptOutput;
}

// Listen for SIGTERM
process.on('SIGINT', () => {
  console.log("Caught interrupt signal");
  loop = false;
  process.exit(0);
});

// Main loop i/o
console.log(USER_PROMPT + NEWLINE);
while (loop === true) {
  let userInput;
  if (lock === false) {
    userInput = await hear();
    lock = true;
  }
  const content = await dispatch(userInput);
  await say(content);
  lock = false;
}
