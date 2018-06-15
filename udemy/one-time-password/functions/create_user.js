const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({
      error: 'Bad Input'
    });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  return admin
    .auth()
    .createUser({ uid: phone })
    .then(user => {
      return res.send(user);
    })
    .catch(err => {
      return res.status(422).send({ error: err });
    });
};
