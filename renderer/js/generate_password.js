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
    fetch(`http://localhost:5000/generate-password?length=${length}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("generatedText").value = data.password;
            document.getElementById("copyButton").style.display = 'inline'; // Show the copy button
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


document.getElementById("copyButton").addEventListener("click", function(){
    var copyText = document.getElementById("generatedText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
});
