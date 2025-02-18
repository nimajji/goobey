     const audio = document.getElementById('valentine-music');
 
     // Get the card element
     const card = document.querySelector('.card');
     const playButton = document.getElementById('play-music');
 
     // Allow user to start music manually
     playButton.addEventListener('click', () => {
       audio.play();
     });
 
     // Play music when card is clicked
     card.addEventListener('click', () => {
      console.log("Card clicked, attempting to play music...");
      audio.play().catch(error => console.error("Audio play failed:", error));
    });
    
     audio.volume = 0.5; // Set volume to 50%
