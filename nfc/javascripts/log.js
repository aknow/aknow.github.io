const logArea = document.getElementById('logArea');

// Custom log function to append messages to the log area
function log(message) {
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    logArea.appendChild(logEntry);

    // Scroll to the bottom to show the latest log entry
    logArea.scrollTop = logArea.scrollHeight;
}