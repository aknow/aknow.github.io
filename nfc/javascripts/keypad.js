// Get references to the input field and keypad buttons
const inputField = document.getElementById('inputField');
const keys = document.querySelectorAll('.key');

// Add event listeners to keypad buttons
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;

        if (keyValue === 'Clear') {
            inputField.value = '0';
        } else {
            if (inputField.value === '0') {
                inputField.value = keyValue;
            } else {
                inputField.value += keyValue;
            }
        }
    });
});