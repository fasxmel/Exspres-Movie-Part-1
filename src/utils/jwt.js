const jwt = require('jsonwebtoken');

function sign (payload, secretPrivateKey, options = {}) {
 const promise =  new Promise((resolve, reject) => {
        jwt.sign(payload, secretPrivateKey, options,(err, token) => {
            if (err) {
               return reject(err);
            } else {
                resolve(token);
            }
        });
   
    });

    return promise;
}

module.exports = {
    sign,
}