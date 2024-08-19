const colors = ["red", "green", "yellow", "pink", "rgb(113,46,30)"];
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    const colorNameElement = document.querySelector('.color-name');
    const body = document.querySelector('body');
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    
    // Update the text and background color
    colorNameElement.innerHTML = `Background Color: ${selectedColor}`;
    body.style.backgroundColor = selectedColor;
    
    console.log(selectedColor); // This will log the selected color to the console
});
