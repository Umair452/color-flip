const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    const colorNameElement = document.querySelector('.color-name');
    const body = document.querySelector('body');
    
    // Function to generate a random hex color
    function getRandomHexColor() {
        const hexCharacters = '0123456789ABCDEF';
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hexCharacters[Math.floor(Math.random() * 16)];
        }
        return hexColor;
    }

    const randomHexColor = getRandomHexColor();
    
    // Update the text and background color
    colorNameElement.innerHTML = `Background Color: ${randomHexColor}`;
    body.style.backgroundColor = randomHexColor;
    
    console.log(randomHexColor); // This will log the generated hex color to the console
});
