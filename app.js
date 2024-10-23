window.onload = function() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', './assets/sound.mp3'); // Path to your sound file
    audio.loop = true; // Enable looping

    var isPlaying = false; // Variable to track audio state

    // Ensure the button element is available after the DOM is loaded
    var controlAudioButton = document.getElementById('controlAudio');
    
    // Check if the button exists
    if (controlAudioButton) {
        // Button click event listener for play/pause
        controlAudioButton.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause(); // Pause the audio
                this.textContent = 'Play Sound'; // Change button text to 'Play Sound'
            } else {
                audio.play().then(() => {
                    this.textContent = 'Pause Sound'; // Change button text to 'Pause Sound'
                }).catch(error => {
                    console.log('Error occurred:', error);
                });
            }
            isPlaying = !isPlaying; // Toggle the play/pause state
        });
    } else {
        console.log('Button with ID "controlAudio" not found');
    }
};
