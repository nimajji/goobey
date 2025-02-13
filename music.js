// Get the audio element
const audio = document.getElementById('valentine-music');

// Get the card element
const card = document.querySelector('.card');

// Play music when the card is clicked
card.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
  }
});
audio.volume = 0.5; // Set volume to 50%
