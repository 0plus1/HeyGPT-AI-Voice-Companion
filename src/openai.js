import OpenAI from "openai";
import { OPENAI_API_KEY, OPEN_AI_MODEL, BOT_PROMPT } from './contants.js';

const messages = [];
let openai;

function pushToMessages(message) {
  messages.push(message);
}

function errorHandler(err) {
  // https://github.com/openai/openai-node/blob/master/examples/errors.ts
  if (err instanceof NotFoundError) {
    console.log(`Caught NotFoundError!`);
    console.log(err);
    console.log(`message: `, err.message);
    console.log(`code: `, err.code);
    console.log(`type: `, err.type);
    console.log(`param: `, err.param);
  } else {
    console.log(`Raised unknown error`);
  }
  throw err;
}

export function initOpenAI() {
  openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  // Initialise the bot with a prompt
  pushToMessages({ role: 'system', content: BOT_PROMPT });
}

export async function dispatch(content) {
  messages.push({ role: "user", content });
  try {
    const completion = await openai.chat.completions.create({
      model: OPEN_AI_MODEL,
      messages,
    });
    try {
      const data = completion.choices[0].message;
      messages.push(data);
      return data.content;
    } catch (error) {
      errorHandler(error);
    }
  } catch (error) {
    errorHandler(error);
  }
}
