// --- USER ROUTER --- //
const express = require('express');

const router = express.Router();

const userController = require('./controller');

// ROUTES
// Login with params (email and password)
router.get ('/login', async (req, res) => {
  res.send(await userController.loginUser(req.query.email, req.query.password))
})

// Register
router.post('/register', async (req, res) => {
  res.send(await userController.registerUser(req.body))
})

// EXPORTS
module.exports = router;
