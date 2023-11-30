
// Funkcija, kuri sugeneruoja atsitiktines spalvas ir pavadinimą
function generateRandomColors(count) {
    const randomColorsSection = document.getElementById("random-colors");
    const colorBox = document.getElementById("color-box");
    const colorName = document.getElementById("color-name");
    const pradziaSection = document.getElementById("pradzia");

    // Išvalykite turinį, jei jis jau yra
    randomColorsSection.innerHTML = "";

   
    let colors = [];
    for (let i = 0; i < count; i++) {
        const randomColor = getRandomColorRGB();
        colors.push(randomColor);

        const randomColorBox = document.createElement("div");
       
        randomColorBox.classList.add("box");
        randomColorBox.style.backgroundColor = randomColor;

        
        randomColorBox.addEventListener("click", function() {
            
            const selectedColor = randomColorBox.style.backgroundColor;
            colorBox.style.backgroundColor = selectedColor;

            
            const rgbColor = cssColorToRgb(selectedColor);
            colorName.textContent = `RGB: (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;

            pradziaSection.style.backgroundColor = selectedColor;
        });

        randomColorsSection.appendChild(randomColorBox);
    }
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = selectedColor;

    const rgbColor = cssColorToRgb(selectedColor);
    colorName.textContent = `RGB: (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    pradziaSection.style.backgroundColor = selectedColor;
}


function getRandomColorRGB() {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();
    return `rgb(${r}, ${g}, ${b})`;
}


function cssColorToRgb(cssColor) {
    const match = cssColor.match(/\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
        return {
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3])
        };
    }
    return null;
}

// "hard"
document.getElementById("colorBtn").addEventListener("click", function() {
    generateRandomColors(6);
});

// Mygtukui "du"
document.getElementById("du").addEventListener("click", function() {
    generateRandomColors(3);
});

// Mygtukui "vienas"
document.getElementById("vienas").addEventListener("click", function() {
    generateRandomColors(10);
});

