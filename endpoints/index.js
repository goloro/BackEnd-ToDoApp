const express = require('express');

// ROUTERS
const userRouter = require('./user/router');

// ENDPOINTS
function endpointsApi(app) {
  const router = express.Router();

  app.use('/', router);

  router.use('/user', userRouter);
}

// EXPORTS
module.exports = endpointsApi;
