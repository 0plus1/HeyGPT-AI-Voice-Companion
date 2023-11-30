import { readProfileVariables } from '#root/src/profiles.js';

const { SPEECH_TO_TEXT_STOP_WORD } = readProfileVariables();

export function lookForStopWord(text) {
  const data = {
    text,
    stopWordFound: false,
  };

  if (text.includes(SPEECH_TO_TEXT_STOP_WORD)) {
    data.text = text.replace(new RegExp(SPEECH_TO_TEXT_STOP_WORD + '$'), '');
    data.stopWordFound = true;
  }
  return data;
}