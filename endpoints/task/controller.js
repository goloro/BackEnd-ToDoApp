// --- TASK CONTROLLER --- //
const taskPromises = require('./promises');

// FUNCTIONS
// Create task
async function createTask(taskData) {
  return await taskPromises.createTask(taskData)
}

// Delete task
async function deleteTask(id, projectId) {
  return await taskPromises.deleteTask(id, projectId)
}

// Update task by ID
async function updateTask(id, taskData) {
  return await taskPromises.updateTask(id, taskData)
}

// Get task by ID
async function getTaskById(id) {
  return await taskPromises.getTaskById(id)
}

// Get task of a project
async function getTasksOfProject(projectId) {
  return await taskPromises.getTasksOfProject(projectId)
}

// EXPORTS
module.exports = ({
  createTask,
  deleteTask,
  updateTask,
  getTaskById,
  getTasksOfProject
})