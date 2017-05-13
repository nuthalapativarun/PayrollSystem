var userCtrl = require('../build/controllers/user.controller');

module.exports = function (app) {

    app.get('/api/user/login/:email/:password', userCtrl.login);

};