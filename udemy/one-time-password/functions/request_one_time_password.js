const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({
            error: 'Bad Input'
        });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    return admin.auth().getUser(phone).then(user => {
        const code = Math.floor(Math.random() * 8999 + 1000)
        twilio.messages.create({
            to: phone,
            from: '+14388340936',
            body: 'Your code is ' + code
        }, (err) => {
            if (err) {
                return res.status(422).send(err)
            }

            return admin.database().ref('users/' + phone).update({
                code: code,
                codeValid: true
            }, () => {
               return res.send({
                    success: true
                })
            })
        })
        return user
    }).catch(err => console.log(err))
}