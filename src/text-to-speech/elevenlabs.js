import { TEMP_FOLDER, ELEVEN_LABS_API_KEY, ELEVEN_LABS_VOICE_ID } from '#root/src/contants.js';
import fetch from 'node-fetch';
import fs from 'fs';
import { playAudio } from '#root/src/text-to-speech/simpleAudioEngine.js';

const AUDIO_FILE = TEMP_FOLDER + '/audio.mp3';

async function rawCallToElevenlabs(text) {
  const body = JSON.stringify({
    text,
  });
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_LABS_VOICE_ID}/stream`, {
    method: 'POST',
    headers: { 'xi-api-key': ELEVEN_LABS_API_KEY, 'Content-Type': 'application/json', Accept: "audio/mpeg", },
    body,
  });
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(AUDIO_FILE, Buffer.from(arrayBuffer));
}

export async function speak(textInput) {
  rawCallToElevenlabs(textInput)
    .then(() => {
      playAudio(AUDIO_FILE);
    })
    .catch((e) => {
      console.log(e);
    });
}