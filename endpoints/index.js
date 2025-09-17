const express = require('express');

const usersRouter = require('./users/router');

function endpointsApi(app) {
    const router = express.Router();
    app.use('/', router )

    router.use('/user', usersRouter);
}

module.exports = endpointsApi;