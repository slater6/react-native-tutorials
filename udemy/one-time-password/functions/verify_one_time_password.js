const admin = require("firebase-admin");

module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({
            error: "Bad Input"
        });
    }

    if (!req.body.code) {
        return res.status(422).send({
            error: "No Code Given"
        });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    const code = parseInt(req.body.code);

    admin
        .auth()
        .getUser(phone)
        .then(user => {

            const ref = admin.database().ref('users/' + phone);

            ref.on('value', snapshot => {
                ref.off();

                const user = snapshot.val();

                if (user.code !== code || !user.codeValid) {
                    res.status(422).send({
                        error: "Code not valid"
                    });
                    return;
                }

                ref.update({
                    codeValid: false
                })

                admin.auth().createCustomToken(phone).then(token => {
                    return res.send({
                        token: token
                    })
                }).catch(error => {
                    return res.status(422).send({
                        error: error
                    });
                });

            })

        })
        .catch(err => res.status(500).send({
            err: err
        }));
};