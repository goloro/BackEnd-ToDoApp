const express = require('express');

// ROUTERS
const usersRouter = require('./users/router');
const projectsRouter = require('./projects/router');

function endpointsApi(app) {
    const router = express.Router();
    app.use('/', router )

    router.use('/user', usersRouter);

    router.use('/projects', projectsRouter);
}

module.exports = endpointsApi;