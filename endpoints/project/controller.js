// --- PROJECT CONTROLLER --- //
const projectPromises = require('./promises');
const userPromises = require('../user/promises');

// FUNCTIONS
// Create project
async function createProject(projectData) {
  const result = await projectPromises.createProject(projectData)
  
  // Si el proyecto se creó exitosamente, agregarlo al usuario
  if (result.successful && result.projectData) {
    await userPromises.addProjectToUser(result.projectData.owner, result.projectData._id)
  }
  
  return result
}

// Update project
async function updateProject(id, projectData) {
  return await projectPromises.updateProject(id, projectData)
}

// Delete project
async function deleteProject(id) {
  try {
    const result = await projectPromises.deleteProject(id)
    
    // Si el proyecto se eliminó exitosamente, también eliminarlo del usuario
    if (result.successful && result.projectData) {
      const userResult = await userPromises.deleteProjectOfUser(result.projectData.owner, id)
      if (!userResult.successful) {
        console.warn(`Project deleted but failed to remove from user: ${userResult.error}`)
      }
    }
    
    return result
  } catch (error) {
    console.error(`Error in deleteProject controller:`, error)
    return { successful: false, error: error }
  }
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