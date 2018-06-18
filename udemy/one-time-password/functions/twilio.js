const twilio = require('twilio');
const credentials = require('./key/credentials')

module.exports = new twilio.Twilio(credentials.accountSid, credentials.authToken)