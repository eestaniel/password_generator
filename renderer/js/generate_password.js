// Get the slider and number input elements
const lengthSlider = document.getElementById("lengthSlider");
const lengthInput = document.getElementById("lengthInput");

// Update the number input whenever the slider changes
lengthSlider.addEventListener("input", function() {
  lengthInput.value = lengthSlider.value;
});

// Update the slider whenever the number input changes
lengthInput.addEventListener("input", function() {
  lengthSlider.value = lengthInput.value;
});

// Function to generate password and populate the text field
function generatePassword() {
    const length = document.getElementById("lengthInput").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let characters = '';
    if (uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (numbers) {
        characters += '0123456789';
    }
    if (symbols) {
        characters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById("generatedText").value = password
    document.getElementById("copyButton").style.display = 'inline'; // Show the copy button

}


document.getElementById("copyButton").addEventListener("click", function(){
    var copyText = document.getElementById("generatedText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
});
