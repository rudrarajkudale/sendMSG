require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  

const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body) => {
    try {
        const message = await client.messages.create({
            from: '+13073367092',  
            to: '+919307103123',  
            body: body            
        });
        console.log('Message Sent! SID:', message.sid);
    } catch (error) {
        console.error('Error Sending Message:', error.message);
    }
};

sendSMS('Msg Sent by Node.js');
