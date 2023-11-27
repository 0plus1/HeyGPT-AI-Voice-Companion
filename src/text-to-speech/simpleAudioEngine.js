import Play from 'play-sound';

export async function playAudio(filePath) {
  const player = Play({});

  player.play(filePath, (err) => {
    if (err) {
      console.log(err);
    }
  });
}