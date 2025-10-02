const express = require('express');

// ROUTERS
const userRouter = require('./user/router');
const projectRouter = require('./project/router');

// ENDPOINTS
function endpointsApi(app) {
  const router = express.Router();

  app.use('/', router);

  router.use('/user', userRouter);

  router.use('/project', projectRouter);
}

// EXPORTS
module.exports = endpointsApi;
