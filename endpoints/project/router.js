// --- PROJECT ROUTER --- //
const express = require('express');

const router = express.Router();

const projectController = require('./controller');

// ROUTES
// Create project
router.post('/create', async (req, res) => {
  res.send(await projectController.createProject(req.body))
})

// Update project
router.put('/update/:id', async (req, res) => {
  res.send(await projectController.updateProject(req.params.id, req.body))
})

// Delete project
router.delete('/delete/:id', async (req, res) => {
  res.send(await projectController.deleteProject(req.params.id))
})

// Get project by ID
router.get('/getById/:id', async (req, res) => {
  res.send(await projectController.getProjectById(req.params.id))
})

// Get projects of a user
router.get('/getByUserId/:userId', async (req, res) => {
  res.send(await projectController.getProjectsByUserId(req.params.userId))
})

// EXPORTS
module.exports = router;