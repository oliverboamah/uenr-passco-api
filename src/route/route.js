const express = require("express");
const router = express.Router();
const user = require('../controller/user');
const account = require('../controller/account');
const transaction = require('../controller/transaction');
const question = require('../controller/question');

function routes($router) {

    // define user routes
    router.post('/user/store', user.store);
    router.get('/user/show', user.show);
    router.get('/user/get_id', user.get_id);
    router.put('/user/update', user.update);
    router.put('/user/update_password', user.update_password);
    router.get('/user/sendEmailVerificationLink', user.sendEmailVerificationLink);
    router.get('/user/verifyEmail', user.verifyEmail);

    // define account routes
    router.post('/account/store', account.store);
    router.get('/account/show', account.show);
    router.put('/account/update', account.update);

    // define transaction routes
    router.post('/transaction/store', transaction.store);
    router.get('/transaction/show', transaction.show);

    // define question routes
    router.post('/question/store', question.store);
    router.get('/question/show', question.show);
    router.get('/question/search', question.search)
}

const setupRouter = function (app) {

    // Make router aware of our routes
    routes(router);

    app.use('/api/v1', router);
};

module.exports = setupRouter;