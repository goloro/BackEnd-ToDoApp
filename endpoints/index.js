const express = require('express');

// ROUTERS
const userRouter = require('./user/router');
const projectRouter = require('./project/router');
const noteRouter = require('./note/router');

// ENDPOINTS
function endpointsApi(app) {
  const router = express.Router();

  app.use('/', router);

  router.use('/start', async (req, res) => {
    res.json({ successful: true, message: '🚀 Starting Backend at URL: https://backend-todoapp-m30z.onrender.com' });
  });

  router.use('/user', userRouter);

  router.use('/project', projectRouter);

  router.use('/note', noteRouter);
}

// EXPORTS
module.exports = endpointsApi;
