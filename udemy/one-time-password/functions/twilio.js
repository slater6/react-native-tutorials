const twilio = require('twilio');
const credentials = require('./credentials')

module.exports = new twilio.Twilio(credentials.accountSid, credentials.authToken)