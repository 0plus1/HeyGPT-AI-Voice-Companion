import { TEXT_TO_SPEECH_PLATFORM, OSX_TEXT_TO_SPEECH_VOICE } from '../contants.js';
import { speak as osx } from './osx.js';
import { speak as elevenlabs } from './elevenlabs.js';

export function textToSpeech(textInput) {
  switch (TEXT_TO_SPEECH_PLATFORM) {
    case 'elevenlabs':
      return elevenlabs(textInput);
    case 'osx':
      return osx(textInput, OSX_TEXT_TO_SPEECH_VOICE);
    default:
      throw new Error('No valid text to speech platform specified');
  }
}