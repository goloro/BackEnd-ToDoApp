// --- USER CONTROLLER --- //
const userPromises = require('./promises');

// FUNCTIONS
// Login
async function loginUser(email, password) {
  return await userPromises.loginUser(email, password)
}

// Register
async function registerUser(userData) {
  return await userPromises.registerUser(userData)
}

// Delete
async function deleteUser(userId) {
  return await userPromises.deleteUser(userId)
}

// Update
async function updateUser(userId, userData) {
  return await userPromises.updateUser(userId, userData)
}

// Get user by ID
async function getUserById(userId) {
  return await userPromises.getUserById(userId)
}

// Get user by email
async function getUserByEmail(email) {
  return await userPromises.getUserByEmail(email)
}

// Get Projects of a user MAYBE USELESS
async function getProjectsOfUser(userId) {
  return await userPromises.getProjectsOfUser(userId)
}

// EXPORTS
module.exports = ({
  loginUser,
  registerUser,
  getUserById,
  getUserByEmail,
  getProjectsOfUser
})
