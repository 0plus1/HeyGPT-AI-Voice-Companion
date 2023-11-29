import { PROFILE_TO_LOAD, PROFILES_FOLDER } from '#root/src/contants.js';
import fs from 'fs';

export function readProfileVariables() {
  const profileFile = `${PROFILES_FOLDER}/${PROFILE_TO_LOAD}.json`;
  const fileContents = fs.readFileSync(profileFile);
  const json = JSON.parse(fileContents);
  return json;
}
