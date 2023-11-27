import { TEXT_TO_SPEECH_PLATFORM, TEXT_TO_SPEECH_VOICE } from '../contants.js';
import { speak as osx } from './osx.js';

export function textToSpeech(textInput) {
  switch (TEXT_TO_SPEECH_PLATFORM) {
    case 'osx':
      return osx(textInput, TEXT_TO_SPEECH_VOICE);
    default:
      throw new Error('No valid text to speech platform specified');
  }
}