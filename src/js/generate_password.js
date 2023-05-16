// Get the slider and number input elements
const lengthSlider = document.getElementById("lengthSlider");
const lengthInput = document.getElementById("lengthInput");

// Update the number input whenever the slider changes
lengthSlider.addEventListener("input", function () {
    lengthInput.value = lengthSlider.value;
});

// Update the slider whenever the number input changes
lengthInput.addEventListener("input", function () {
    lengthSlider.value = lengthInput.value;
});

// Function to generate password and populate the text field
function generatePassword() {
    const length = document.getElementById("lengthInput").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const data = {
        length: length,
        uppercase: uppercase,
        lowercase: lowercase,
        numbers: numbers,
        symbols: symbols
    };
    console.log(data)

    fetch('http://localhost:5000/generate-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("floatingTextarea").value = data.password;
            document.getElementById("copyButton").style.display = 'inline'; // Show the copy button
            const generatedText = document.getElementById("floatingTextarea");
            generatedText.value = data.password;
            adjustTextareaHeight(generatedText);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function adjustTextareaHeight(textarea) {
    textarea.style.height = ""; // Reset the height
    textarea.style.height = textarea.scrollHeight + "px";
}


document.getElementById("copyButton").addEventListener("click", function () {
    var copyText = document.getElementById("floatingTextarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
});


