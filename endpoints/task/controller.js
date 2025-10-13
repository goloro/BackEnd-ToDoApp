// --- TASK CONTROLLER --- //
const taskPromises = require('./promises');
const projectPromises = require('../project/promises');

// FUNCTIONS
// Create task
async function createTask(taskData) {
  const result = await taskPromises.createTask(taskData)
  
  // Si la task se creó exitosamente y tiene proyecto, agregarla al proyecto
  if (result.successful && result.taskData && result.taskData.project) {
    await projectPromises.addTaskToProject(result.taskData.project, result.taskData._id)
  }
  
  return result
}

// Delete task
async function deleteTask(id, projectId) {
  const result = await taskPromises.deleteTask(id, projectId)
  
  // Si la task se eliminó exitosamente y tiene proyecto, eliminarla del proyecto
  if (result.successful && result.taskData && result.taskData.project) {
    await projectPromises.deleteTaskOfProject(result.taskData.project, id)
  } else if (result.successful && projectId) {
    // Si no hay taskData pero se pasó projectId como parámetro
    await projectPromises.deleteTaskOfProject(projectId, id)
  }
  
  return result
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