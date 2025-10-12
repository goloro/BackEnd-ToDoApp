// --- TASK ROUTER --- //
const express = require('express');

const router = express.Router();

const taskController = require('./controller');

// ROUTES
// Create task
router.post('/create', async (req, res) => {
  res.send(await taskController.createTask(req.body))
})

// Delete task
router.delete('/delete/:id/:projectId', async (req, res) => {
  res.send(await taskController.deleteTask(req.params.id, req.params.projectId))
})

// Update task by ID
router.put('/update/:id', async (req, res) => {
  res.send(await taskController.updateTask(req.params.id, req.body))
})

// Get task by ID
router.get('/getById/:id', async (req, res) => {
  res.send(await taskController.getTaskById(req.params.id))
})

// Get tasks of a project
router.get('/getByProject/:projectId', async (req, res) => {
  res.send(await taskController.getTasksOfProject(req.params.projectId))
})

// EXPORTS
module.exports = router;