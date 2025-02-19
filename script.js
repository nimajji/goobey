const audio = document.getElementById('valentine-music');
const card = document.querySelector('.card');

let isCardOpen = false; // Track whether the card is open or closed

// Toggle card state and play/pause music
card.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent event from bubbling up to the document
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

// Floating hearts on click anywhere
document.addEventListener('click', function(event) {
  const heart = document.createElement('span');
  heart.innerHTML = '💖';
  heart.classList.add('floating-heart');

  // List of available animations
  const animations = ['float-wobble', 'float-grow', 'float-spin',];
  
  // Pick a random animation from the list
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

  // Apply the random animation
  heart.style.animation = `${randomAnimation} 3s ease-in-out`;

  // Set position at the click location
  heart.style.position = 'fixed';
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;
  heart.style.transform = 'translate(-50%, -50%)';
  heart.style.zIndex = '1000';

  document.body.appendChild(heart);

  // Remove after animation ends
  setTimeout(() => {
      heart.remove();
  }, 3000);
});
