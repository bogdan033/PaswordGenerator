let includeLowerCase = false;
let includeUpperCase = false;
let includeNumbers = false;
let includeSymbols = false;

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*";

function getChecks() {
    includeLowerCase = document.getElementById('lowercaseCheck').checked;
    includeUpperCase = document.getElementById('uppercaseCheck').checked;
    includeNumbers = document.getElementById('numbersCheck').checked;
    includeSymbols = document.getElementById('symbolsCheck').checked;
}

function generatePassword() {
    let passwordLength = parseInt(document.getElementById('passLength').value);
    getChecks();

    let allowedChars = "";

    if (includeLowerCase) allowedChars += lowercaseChars;
    if (includeUpperCase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (isNaN(passwordLength) || passwordLength <= 0) {
        document.getElementById('outputText').textContent = "Password length must be at least 1.";
        return;
    }

    if (allowedChars.length === 0) {
        document.getElementById('outputText').textContent = "At least one character set must be selected.";
        return;
    }

    document.getElementById('outputText').textContent = "Generating...";

    setTimeout(() => {
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        document.getElementById('outputText').textContent = `Generated Password: ${password}`;
    }, 1000); // Wait 2 seconds before showing password
}