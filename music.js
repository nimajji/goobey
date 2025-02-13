// Get the audio element
const audio = document.getElementById('valentine-music');

// Get the card element
const card = document.querySelector('.card');

// Allow user to start music manually
playButton.addEventListener('click', () => {
  audio.play();
  playButton.style.display = 'none'; // Hide the button after clicking
});
audio.volume = 0.5; // Set volume to 50%
