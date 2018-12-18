const request = require('request');
let util = {};
util.request = function (opts) {
    opts = opts || {};
    return new Promise(function (resolve, reject) {
        request(opts, function (err, res, body) {
            if (err) {
                reject(err);
            }
            resolve(body);
        });
    });

}
module.exports = util;