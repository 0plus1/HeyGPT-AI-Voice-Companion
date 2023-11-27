// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

const LOCALE = 'it-IT';
// OPEN AI
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const OPEN_AI_MODEL = 'gpt-3.5-turbo';
// Speech to text
export const SPEECH_TO_TEXT_PLATFORM = 'osx';
export const SPEECH_TO_TEXT_LOCALE = LOCALE;
export const SPEECH_TO_TEXT_STOP_WORD = 'passo';
// Text to speech
export const TEXT_TO_SPEECH_PLATFORM = 'osx';
export const TEXT_TO_SPEECH_VOICE = 'Alice';
// User preferences
export const BOT_PROMPT = 'You are a very friendly bot. Which acts as a friend to the user. Your name is Armando.';
export const USER_PROMPT = 'Say hi to your new friend, Armando.';
