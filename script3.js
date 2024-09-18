const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');


const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

const colorPicker = document.getElementById('colorPicker');

function updateColor() {
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    // Sincronizar los campos de entrada con los valores de los controles deslizantes
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Calcular el color RGB y hexadecimal
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    // Actualizar el color de fondo, el código hexadecimal y el color picker
    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
    colorPicker.value = hexColor;
}

function updateRangeFromInput() {
    const r = parseInt(redInput.value);
    const g = parseInt(greenInput.value);
    const b = parseInt(blueInput.value);

    // Asegurarse de que los valores sean válidos
    if (r >= 0 && r <= 255) redRange.value = r;
    if (g >= 0 && g <= 255) greenRange.value = g;
    if (b >= 0 && b <= 255) blueRange.value = b;

    updateColor();
}

function updateColorFromPicker() {
    const hexColor = colorPicker.value;
    
    // Convertir el color hexadecimal a RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Actualizar los valores de los controles deslizantes y los inputs
    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    updateColor();
}

// Escuchar los cambios en los controles deslizantes
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

// Escuchar los cambios en los campos de entrada
redInput.addEventListener('input', updateRangeFromInput);
greenInput.addEventListener('input', updateRangeFromInput);
blueInput.addEventListener('input', updateRangeFromInput);

// Escuchar los cambios en el color picker
colorPicker.addEventListener('input', updateColorFromPicker);

updateColor(); // Inicializar el color
