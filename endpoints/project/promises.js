// --- PROJECT PROMISES --- //
const projectSchema = require('../../models/projectModel')

// PROMISES
const userPromises = require('../user/promises')

// FUNCTIONS
// Create project
async function createProject(projectData) {
  const projectExists = await projectSchema.findOne({ title: projectData.title, owner: projectData.owner })
  
  if (!projectExists) {
    try {
      const project = await new projectSchema(projectData).save()
      userPromises.addProjectToUser(project.owner, project._id)

      console.log(`Project created {ID:${project._id}}`)
      return { successful: true, projectData: project }
    } catch (error) {
      console.error(`Error creating project {Title:${projectData.title}}`, error)
      return { successful: false, error: error }
    }
  }

  return { successful: false, error: 'Project already exists' }
}

// Update project
async function updateProject(id, projectData) {
  try {
    await projectSchema.findByIdAndUpdate(id, projectData, { new: true })

    console.log(`Project updated {ID:${id}}`)
    return { successful: true, projectData: projectData }
  } catch (error) {
    console.error(`Error updating project {ID:${id}}`, error)
    return { successful: false, error: error }
  }
}

// Delete project
async function deleteProject(id) {
  try {
    const project = await projectSchema.findByIdAndDelete(id)
    userPromises.deleteProjectOfUser(project.owner, id)

    console.log(`Project deleted {ID:${id}}`)
    return { successful: true }
  } catch (error) {
    console.error(`Error deleting project {ID:${id}}`, error)
    return { successful: false, error: error }
  }
}

// Get project by ID
async function getProjectById(id) {
  const project = await projectSchema.findById(id)

  if (project) {
    console.log(`Project found {ID:${id}}`)
    return { successful: true, projectData: project }
  } else {
    console.error(`Project not found {ID:${id}}`)
    return { successful: false, error: 'Project not found' }
  }
}

// Get projects by user ID
async function getProjectsByUserId(userId) {
  const projects = await projectSchema.find({ owner: userId })

  if (projects.length > 0) {
    console.log(`Projects found for user {UserID:${userId}}`)
    return { successful: true, projects: projects }
  } else if (projects.length === 0) {
    console.log(`Projects found for user {UserID:${userId}} (EMPTY)`)
    return { successful: false, error: 'Empty' }
  } else {
    console.error(`No projects found for user {UserID:${userId}}`)
    return { successful: false, error: 'No projects found for this user' }
  }
}

// EXPORTS
module.exports = ({
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectsByUserId
})