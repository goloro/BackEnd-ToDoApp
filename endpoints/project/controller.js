// --- PROJECT CONTROLLER --- //
const projectPromises = require('./promises');

// FUNCTIONS
// Create project
async function createProject(projectData) {
  return await projectPromises.createProject(projectData)
}

// Update project
async function updateProject(id, projectData) {
  return await projectPromises.updateProject(id, projectData)
}

// Delete project
async function deleteProject(id) {
  return await projectPromises.deleteProject(id)
}

// Get project by ID
async function getProjectById(id) {
  return await projectPromises.getProjectById(id)
}

// Get projects by user ID
async function getProjectsByUserId(userId) {
  return await projectPromises.getProjectsByUserId(userId)
}

// EXPORTS
module.exports = ({
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectsByUserId
})