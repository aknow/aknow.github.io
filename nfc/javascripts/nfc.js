// Check if the Web NFC API is supported in the browser
if (!('NDEFReader' in window)) {
    // Web NFC API is not supported in this browser
    log('Web NFC API is not supported in this browser.');
} else {
    const ndef = new NDEFReader();

    ndef.addEventListener("readingerror", () => {
        log("Argh! Cannot use this card. Try another one?");
    });

    ndef.addEventListener("reading", ({
        message,
        serialNumber
    }) => {
        const action = getAction();
        log(`> ${action} - ${serialNumber}`);
        execute(serialNumber, action);
        // log(`> Records: (${message.records.length})`);
    });

    log("> Scan started");
    ndef.scan();
}

// Function to request NFC permission
async function requestPermission() {
    log("User clicked scan button");

    try {
        const ndef = new NDEFReader();
        await ndef.scan();
        log("> Scan started");

        ndef.addEventListener("readingerror", () => {
            log("Argh! Cannot read data from the NFC tag. Try another one?");
        });

        ndef.addEventListener("reading", ({
            message,
            serialNumber
        }) => {
            log(`> Serial Number: ${serialNumber}`);
            log(`> Records: (${message.records.length})`);
        });
    } catch (error) {
        log("Argh! " + error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the button
    const requestNFCPermissionButton = document.getElementById("requestNFCPermission");
    if (requestNFCPermissionButton) {
        requestNFCPermissionButton.addEventListener("click", requestPermission);
    }

    const resetButton = document.getElementById("reset");
    if (resetButton) {
        resetButton.addEventListener("click", function() {
            initBalance();
        });
    }

    const testScanButton = document.getElementById("test");
    if (testScanButton) {
        testScanButton.addEventListener("click", function() {
            execute('TEST_CARD_ID', getAction());
        });
    }
});