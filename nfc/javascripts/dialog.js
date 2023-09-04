// Get references to the elements
const customAlertModal = document.getElementById('customAlertModal');
const closeButton = document.getElementsByClassName('close')[0];
const okButton = document.getElementById('okButton');
const customMessage = document.querySelector('.custom-message');

// Close the custom alert modal when the close button is clicked
closeButton.onclick = function() {
    customAlertModal.style.display = 'none';
}

// Close the custom alert modal when the OK button is clicked
okButton.onclick = function() {
    customAlertModal.style.display = 'none';
}

// Close the custom alert modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === customAlertModal) {
        customAlertModal.style.display = 'none';
    }
}

function showDialog(message) {
    customMessage.textContent = message
    customAlertModal.style.display = 'block';
}

function showBalanceDialog(amount) {
    const message = `Current Balance: ${amount}`;
    showDialog(message);
}

function showNotEnoughBalanceDialog(amount) {
    const message = `You don't have enough money! Current Balance: ${amount}`;
    showDialog(message);
}