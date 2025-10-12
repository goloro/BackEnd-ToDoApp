// --- TASK PROMISES --- //
const taskSchema = require('../../models/taskModel')

// PROMISES
const projectPromises = require('../project/promises')

// FUNCTIONS
// Create task
async function createTask(taskData) {
    const projectTasks = await taskSchema.find({ project: taskData.project })
  
    if (projectTasks) {
        for (let i=0; i<projectTasks.length; i++) {
            if (projectTasks[i].title === "") {
                console.error(`Error creating task, Project already has a task with empty title`)
                return { successful: false, error: 'Project already has a task with empty title', alreadyEmpty: true}
            }
        }
    }
  
    try {
      const task = await new taskSchema(taskData).save()
      projectPromises.addTaskToProject(task.project, task._id)

      console.log(`Task created {ID:${task._id}}`)
      return { successful: true, taskData: task }
    } catch (error) {
      console.error(`Error creating task {Title:${taskData.title}}`, error)
      return { successful: false, error: error }
    }
}

// Delete task
async function deleteTask(id, projectId) {
    try {
        const task = await taskSchema.findOneAndDelete({_id: id})
        projectPromises.deleteTaskOfProject(projectId, id)

        console.log(`Task deleted {ID:${id}}`)
        return { successful: true, taskData: task }
    } catch (error) {
        console.error(`Error deleting task {ID:${id}}`, error)
        return { successful: false, error: error }
    }
}

// Update task by ID
async function updateTask(id, taskData) {
    try {
        const task = await taskSchema.findByIdAndUpdate(id, taskData, { new: false })

        console.log(`Task updated {ID:${id}}`)
        return { successful: true, taskData: task }
    } catch (error) {
        console.error(`Error updating task {ID:${id}}`, error)
        return { successful: false, error: error }
    }
}

// Get task by ID
async function getTaskById(id) {
    const task = await taskSchema.findById(id)

    if (task) {
        console.log(`Task found {ID:${id}}`)
        return { successful: true, taskData: task }
    } else {
        console.error(`Task not found {ID:${id}}`)
        return { successful: false, error: 'Task not found' }
    }
}

// Get task of a project
async function getTasksOfProject(projectId) {
    const tasks = await taskSchema.find({ project: projectId })

    if (tasks.length > 0) {
        console.log(`Tasks found for project {ID:${projectId}}`)
        return { successful: true, tasks: tasks }
    } else {
        console.error(`No tasks found for project {ID:${projectId}}`)
        return { successful: false, error: 'No tasks found for this project' }
    }
}

// EXPORTS
module.exports = ({
    createTask,
    deleteTask,
    updateTask,
    getTaskById,
    getTasksOfProject
})