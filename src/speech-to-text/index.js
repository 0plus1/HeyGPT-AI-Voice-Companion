import { readProfileVariable } from '#root/src/profiles.js';
import { hear as osx } from '#root/src/speech-to-text/osx.js';

const SPEECH_TO_TEXT_PLATFORM = readProfileVariable('SPEECH_TO_TEXT_PLATFORM');
const SPEECH_TO_TEXT_LOCALE = readProfileVariable('LOCALE');

export async function speechToText(textInput) {
  switch (SPEECH_TO_TEXT_PLATFORM) {
    case 'osx':
      return await osx(textInput, SPEECH_TO_TEXT_LOCALE);
    default:
      throw new Error('No valid speech to text platform specified');
  }
}