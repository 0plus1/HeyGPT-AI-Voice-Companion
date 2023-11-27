// Create CLI
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { dispatch, initOpenAI } from './src/openai.js';
import { USER_PROMPT, HALT_WORK } from './src/contants.js';
import { textToSpeech } from './src/text-to-speech/index.js';

// Initialise variables
const readline = createInterface({ input, output });
const NEWLINE = "\n\n";
let userInput;

// Initialise OpenAI
initOpenAI();

// Main loop i/o
userInput = await readline.question(USER_PROMPT + NEWLINE);
while (userInput !== HALT_WORK) {
  const content = await dispatch(userInput);
  await textToSpeech(content);
  userInput = await readline.question(content + NEWLINE);
}

readline.close();
