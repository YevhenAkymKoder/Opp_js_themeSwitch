function themeSwitcher() {
    const body = document.body;
    // Check and change body bg
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}

function themeBox(element) {
    // Check and change button div bg
    if (element.classList.contains('lightMode')) {
        element.classList.remove('lightMode');
        element.classList.add('darkMode');
    } else {
        element.classList.remove('darkMode');
        element.classList.add('lightMode');
    }
}

// Get all elements with id="color"
const colorSwitch = document.querySelectorAll("#color");
let darkMode = true;

function themeSwitch() {
    if (darkMode) {
        colorSwitch.forEach(function(colorSwitch) {
            colorSwitch.classList.add("darkMode")
        });
    } else {
        colorSwitch.forEach(function(colorSwitch) {
            colorSwitch.classList.remove("darkMode")
        });
    }
    darkMode = !darkMode;
}

// JavaScript function to change the color of the box
function RandomColorBg() {
    // Get the box element
    var boxes = document.querySelectorAll("#color_randomBg");
    boxes.forEach(function(box) {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Change the background and text color of the box to the random color
    box.style.color = randomColor;
    box.style.backgroundColor = randomColor2;
});
}

function RandomColor() {
    // Get all elements with id="color_random"
    var elements = document.querySelectorAll("#color_random");
   // Get the box all element
    elements.forEach(function(element) {
        // Generate a random color format RGB
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
                           (Math.floor(Math.random() * 256)) + ',' + 
                           (Math.floor(Math.random() * 256)) + ')';
        // Set the generated background color
        element.style.backgroundColor = randomColor;
    });
}