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

// Get user by ID
router.get ('/getById', async (req, res) => {
  res.send(await userController.getUserById(req.query.id))
})

// Get user by email
router.get ('/getByEmail', async (req, res) => {
  res.send(await userController.getUserByEmail(req.query.email))
})

// Get projects of user MAYBE USELESS
router.get ('/getProjects', async (req, res) => {
  res.send(await userController.getProjectsOfUser(req.query.userId))
})

// EXPORTS
module.exports = router;
