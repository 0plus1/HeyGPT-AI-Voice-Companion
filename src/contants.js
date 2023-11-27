// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

const STORAGE_FOLDER = './storage';
export const PROFILES_FOLDER = `${STORAGE_FOLDER}/profiles`;
export const TEMP_FOLDER = `${STORAGE_FOLDER}/temp`;

// OPEN AI
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const OPEN_AI_MODEL = 'gpt-3.5-turbo';
export const OPEN_AI_MAX_TOKENS = 100;
// Elevenlabs
export const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;
export const ELEVEN_LABS_VOICE_ID = process.env.ELEVEN_LABS_VOICE_ID;
// Profile to load
export const PROFILE_TO_LOAD = process.env.PROFILE_TO_LOAD;
