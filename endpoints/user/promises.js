// --- USER PROMISES --- //
const userSchema = require('../../models/userModel')

// PROMISES
const projectPromises = require('../project/promises')
const notePromises = require('../note/promises')

// FUNCTIONS
// Login
async function loginUser (email, password) {
  const user = await userSchema.findOne({ email: email, password: password })

  if (user) {
    console.log(`User logged in {Email:${user.email}, Password:${user.password}}`)
    return { successful: true, userData: user }
  } else {
    console.log(`Error logging user {Email:${email}, Password:${password}}`)
    return { successful: false, error: 'Invalid email or password' }
  }
}

// Register
async function registerUser (userData) {
  const userExists = await userSchema.findOne({ email: userData.email })

  if (!userExists) {
    userData.icon = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light&hairColor=BrownDark'

    try {
      const user = await new userSchema(userData).save()

      console.log(`User registered {Email:${user.email}, Password:${user.password}}`)
      return { successful: true, userData: user }
    } catch (error) {
      console.error(`Error registering user {Email:${userData.email}, Password:${userData.password}}`, error)
      return { successful: false, error: error }
    }
  }

  return { successful: false, error: 'User already exists' }
}

// Delete
// TODO: Delete all projects and notes of the user

// Update

// Get user by ID
async function getUserById (userId) {
  const user = await userSchema.findById(userId)

  if (user) {
    console.log(`User found {ID:${userId}}`)
    return { successful: true, userData: user }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Get user by email
async function getUserByEmail (email) {
  const user = await userSchema.findOne({ email: email })

  if (user) {
    console.log(`User found {Email:${email}}`)
    return { successful: true, userData: user }
  } else {
    console.error(`User not found {Email:${email}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Get Projects of a user MAYBE USELESS
async function getProjectsOfUser (userId) {
  const user = await userSchema.findById(userId)

  if (user) {
    console.log(`User found {ID:${userId}}`)
    return { successful: true, projects: user.projects }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Add project to user
async function addProjectToUser (userId, projectId) {
  const user = await userSchema.findById(userId)

  if (user) {
    user.projects.push(projectId)
    await user.save()

    console.log(`Project added to user {UserID:${userId}, ProjectID:${projectId}}`)
    return { successful: true }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Delete project of a user
async function deleteProjectOfUser (userId, projectId) {
  const user = await userSchema.findById(userId)

  if (user) {
    user.projects.pull(projectId)
    await user.save()

    console.log(`Project deleted from user {UserID:${userId}, ProjectID:${projectId}}`)
    return { successful: true }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Add note to a user
async function addNoteToUser (userId, noteId) {
  const user = await userSchema.findById(userId)

  if (user) {
    user.notes.push(noteId)
    await user.save()

    console.log(`Note added to user {UserID:${userId}, NoteID:${noteId}}`)
    return { successful: true }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// Delete note of a user
async function deleteNoteOfUser (userId, noteId) {
  const user = await userSchema.findById(userId)

  if (user) {
    user.notes.pull(noteId)
    await user.save()

    console.log(`Note deleted from user {UserID:${userId}, NoteID:${noteId}}`)
    return { successful: true }
  } else {
    console.error(`User not found {ID:${userId}}`)
    return { successful: false, error: 'User not found' }
  }
}

// EXPORTS
module.exports = ({
  loginUser,
  registerUser,
  getUserById,
  getUserByEmail,
  getProjectsOfUser,
  addProjectToUser,
  deleteProjectOfUser,
  addNoteToUser,
  deleteNoteOfUser
})
