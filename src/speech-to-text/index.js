import { SPEECH_TO_TEXT_PLATFORM, SPEECH_TO_TEXT_LOCALE } from '../contants.js';
import { hear as osx } from './osx.js';

export async function speechToText(textInput) {
  switch (SPEECH_TO_TEXT_PLATFORM) {
    case 'osx':
      return await osx(textInput, SPEECH_TO_TEXT_LOCALE);
    default:
      throw new Error('No valid speech to text platform specified');
  }
}