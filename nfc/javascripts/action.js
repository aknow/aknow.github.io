function actionChange(radio) {
    const clearButton = document.getElementById('clearButoon');
    clearButton.click();

    const keypad = document.getElementById('keypad');
    switch (radio.id) {
        case 'balance':
            keypad.style.visibility = 'hidden';
            break;
        case 'add':
        case 'minus':
            keypad.style.visibility = 'visible';
            break;
    }
}

function getAction() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    return selectedOption ? selectedOption.id : 'balance';
}

function setBalance(allBalance) {
    localStorage.setItem("balance", JSON.stringify([...allBalance]));
}

function initBalance() {
    allBalance = new Map([
        ["dummy", 0]
    ]);
    setBalance(allBalance);
    return allBalance;
}

function getBalance() {
    const balanceData = localStorage.getItem("balance");
    if (!balanceData) {
        return initBalance();
    } else {
        return new Map(JSON.parse(balanceData));
    }
}

function getAmountFromInput() {
    const amount = parseInt(document.getElementById('inputField').value);
    log(`intput ${amount}`);
    return isNaN(amount) ? 0 : amount;
}

function execute(cardID, action) {
    allBalance = getBalance();
    cardBalance = allBalance.has(cardID) ? allBalance.get(cardID) : 0;
    log(`Card balance: ${cardBalance}`);

    const amount = getAmountFromInput();

    switch (action) {
        case 'add':
            cardBalance += amount;
            break;
        case 'minus':
            cardBalance -= amount;
            break;
    }
    log(`New card balance: ${cardBalance}`);

    allBalance.set(cardID, cardBalance);
    setBalance(allBalance);
    alert(`Current Balance: ${cardBalance}`);

    const clearButton = document.getElementById('clearButoon');
    clearButton.click();
}