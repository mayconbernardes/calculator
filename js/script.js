function appendToDisplay(value) {
    document.getElementById('display').value += value;
    playButtonSound();
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const input = document.getElementById('display').value;
    try {
        const result = eval(input);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function playButtonSound() {
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0; // Resets the sound to the beginning
    buttonSound.play();
}

// ON / OFF button
function toggleState(item) {
    if (item.className == "off") {
        clearDisplay();
        document.body.style.backgroundColor = 'lightblue';
        
        // Enable buttons
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    }

    if (item.className == "on") {
        item.className = "off";
        document.body.style.backgroundColor = 'black';
        
        // Disable buttons
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    } else {
        item.className = "on";
    }
}
