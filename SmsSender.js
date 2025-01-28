require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body, toNumber) => {
    try {
        const message = await client.messages.create({
            from: '+13073367092', // Your Twilio number
            to: toNumber,         // The number to send the message to
            body: body,
        });
        console.log('Message Sent! SID:', message.sid);
    } catch (error) {
        throw new Error(error.message);  // This will be caught in the route
    }
};

module.exports = sendSMS;
