import { dispatch, initOpenAI } from './src/openai.js';
import { USER_PROMPT } from './src/contants.js';
import { textToSpeech } from './src/text-to-speech/index.js';
import { speechToText } from "./src/speech-to-text/index.js";

const NEWLINE = "\n\n";
// Initialise variables
let loop = true;
// We need to lock the microphone until the speech has ended
let lock = false;
// Initialise OpenAI
initOpenAI();

// 
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
