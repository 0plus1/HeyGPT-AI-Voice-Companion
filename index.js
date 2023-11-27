// Create CLI
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { dispatch, initOpenAI } from './src/openai.js';
import { USER_PROMPT, HALT_WORK } from './src/contants.js';

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
  userInput = await readline.question(content + NEWLINE);
}

readline.close();
