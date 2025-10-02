// --- USER CONTROLLER --- //
const userPromises = require('./promises');

// FUNCTIONS
async function loginUser(email, password) {
  return await userPromises.loginUser(email, password)
}

async function registerUser(userData) {
  return await userPromises.registerUser(userData)
}

// EXPORTS
module.exports = ({
  loginUser,
  registerUser
})
