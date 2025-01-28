const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sendSMS = require('./SmsSender'); // Import your sendSMS function

const app = express();
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Render the index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST request for sending SMS
app.post('/send-sms', async (req, res) => {
    const { phoneNumber, messageBody } = req.body;

    try {
        // Call sendSMS to send the message
        await sendSMS(messageBody, phoneNumber);
        res.status(200).json({ success: true, message: 'Message Sent!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
