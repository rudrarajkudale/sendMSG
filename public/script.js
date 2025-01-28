document.getElementById('smsForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const messageBody = document.getElementById('messageBody').value;

    const response = await fetch('/send-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            messageBody: messageBody,
        }),
    });

    const result = await response.json();

    const statusDiv = document.getElementById('status');
    
    if (response.ok && result.success) {
        statusDiv.textContent = result.message;
        statusDiv.style.color = 'green';
        alert('Message Sent!');
    } else {
        statusDiv.textContent = `Error: ${result.error}`;
        statusDiv.style.color = 'red';
        alert(`Failed to send message: ${result.error}`);
    }
});
