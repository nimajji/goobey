    const audio = document.getElementById('valentine-music');
const card = document.querySelector('.card');

let isCardOpen = false; // Track whether the card is open or closed

// Toggle card state and play/pause music
card.addEventListener('click', () => {
  isCardOpen = !isCardOpen; // Toggle card state

  if (isCardOpen) {
    card.classList.add('open'); // Add 'open' class to card
    audio.play(); // Play music when card is open
  } else {
    card.classList.remove('open'); // Remove 'open' class from card
    audio.pause(); // Pause music when card is closed
  }
});

audio.volume = 1; // Set volume to 100%

document.addEventListener('click', function(event) {
  const heart = document.createElement('span');
  heart.innerHTML = '💖';
  heart.classList.add('floating-heart');

  // Set heart position at click location
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;

  document.body.appendChild(heart);

  // Remove heart after 3 seconds
  setTimeout(() => {
      heart.remove();
  }, 3000);
});
