document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const speedInput = document.getElementById('speed');

    const text = "Typewriter Text Effect";
    let idx = 1;
    let speed = 300 / speedInput.value;

    // Function to display text with effect
    function typewriterTextEffect() {
        textElement.innerText = text.slice(0, idx);
        idx++;

        if (idx > text.length) {
            idx = 1;
        }

        setTimeout(typewriterTextEffect, speed);
    }

    // Event listener to adjust speed
    speedInput.addEventListener('input', (e) => {
        speed = 300 / e.target.value;
    });

    // Start the text effect
    typewriterTextEffect();
});
