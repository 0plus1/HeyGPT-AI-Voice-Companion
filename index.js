import { dispatch, initOpenAI } from './src/openai.js';
import { USER_PROMPT } from './src/contants.js';
import { textToSpeech } from './src/text-to-speech/index.js';
import { speechToText } from "./src/speech-to-text/index.js";

// Initialise variables
const NEWLINE = "\n\n";
let loop = true;
// Initialise OpenAI
initOpenAI();

// 
async function hear() {
  const userInput = await speechToText();
  console.log(userInput);
  return userInput;
}
async function say(gptOutput) {
  await textToSpeech(gptOutput);
  console.log(gptOutput);
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
  const userInput = await hear();
  const content = await dispatch(userInput);
  await say(content);
}
