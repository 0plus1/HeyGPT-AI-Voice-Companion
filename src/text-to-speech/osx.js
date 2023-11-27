import { exec } from 'child_process';

export function speak(text, voice) {
  // Normalise text 
  text = text.replace(/"/g, '\\"');
  const command = `say -v ${voice} "${text}"`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  });
}
