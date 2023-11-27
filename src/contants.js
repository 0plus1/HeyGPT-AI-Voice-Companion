// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

const LOCALE = 'it-IT';
const STORAGE_FOLDER = './storage';
export const TEMP_FOLDER = `${STORAGE_FOLDER}/temp`;
// OPEN AI
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const OPEN_AI_MODEL = 'gpt-3.5-turbo';
export const OPEN_AI_MAX_TOKENS = 100;
// Speech to text
export const SPEECH_TO_TEXT_PLATFORM = 'osx';
export const SPEECH_TO_TEXT_LOCALE = LOCALE;
export const SPEECH_TO_TEXT_STOP_WORD = 'passo';
// Text to speech
export const TEXT_TO_SPEECH_PLATFORM = 'osx';
export const OSX_TEXT_TO_SPEECH_VOICE = 'Alice';
export const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;
export const ELEVEN_LABS_VOICE_ID = process.env.ELEVEN_LABS_VOICE_ID;
// User preferences
export const BOT_PROMPT = 'You are a very friendly bot. Which acts as a friend to the user. Give short and caring answers, like if it was a real time conversation.';
export const USER_PROMPT = 'Say hi to your new friend.';
