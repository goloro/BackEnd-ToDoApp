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
router.get ('/getById/:id', async (req, res) => {
  res.send(await userController.getUserById(req.params.id))
})

// Get user by email
router.get ('/getByEmail/:email', async (req, res) => {
  res.send(await userController.getUserByEmail(req.params.email))
})

// Get projects of user MAYBE USELESS
router.get ('/getProjects/:userId', async (req, res) => {
  res.send(await userController.getProjectsOfUser(req.params.userId))
})

// TODO: Delete user and all its projects and notes

// EXPORTS
module.exports = router;
