// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const OPEN_AI_MODEL = 'gpt-3.5-turbo';
export const BOT_PROMPT = 'You are a very friendly bot. Which acts as a friend to the user. Your name is Armando.';
export const USER_PROMPT = 'Say hi to your new friend, Armando.';
export const HALT_WORK = '.exit';
