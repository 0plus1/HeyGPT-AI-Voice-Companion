import { readProfileVariables } from '#root/src/profiles.js';
import { speak as osx } from '#root/src/text-to-speech/osx.js';
import { speak as elevenlabs } from '#root/src/text-to-speech/elevenlabs.js';

const { TEXT_TO_SPEECH_PLATFORM, TEXT_TO_SPEECH_VOICE } = readProfileVariables('TEXT_TO_SPEECH_PLATFORM');

export function textToSpeech(textInput) {
  switch (TEXT_TO_SPEECH_PLATFORM) {
    case 'elevenlabs':
      return elevenlabs(textInput);
    case 'osx':
      osx(textInput, TEXT_TO_SPEECH_VOICE);
      break;
    default:
      throw new Error('No valid text to speech platform specified');
  }
}