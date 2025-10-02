// --- USER PROMISES --- //
const userSchema = require('../../models/userModel')

// FUNCTIONS
// Login
async function loginUser (email, password) {
  const user = await userSchema.findOne({ email: email, password: password })

  if (user) {
    console.log(`User logged in {Email:${user.email}, Password:${user.password}}`)
    return { successfull: true, userData: user }
  } else {
    console.log(`User registered {Email:${userData.email}, Password:${userData.password}}`)
    return { successfull: false, error: 'Invalid email or password' }
  }
}

// Register
async function registerUser (userData) {
  const userExists = await userSchema.findOne({ email: userData.email })

  if (!userExists) {
    userData.icon = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light&hairColor=BrownDark'

    try {
      await new userSchema(userData).save()

      console.log(`User registered {Email:${userData.email}, Password:${userData.password}}`)
      return { successfull: true, userData: userData }
    } catch (error) {
      console.error(`Error registering user {Email:${userData.email}, Password:${userData.password}}`, error)
      return { successfull: false, error: error }
    }
  }

  return { successfull: false, error: 'User already exists' }
}

// Get user by ID
async function getUserById (userId) {
  const user = await userSchema.findById(userId)

  if (user) {
    return { successfull: true, userData: user }
  } else {
    return { successfull: false, error: 'User not found' }
  }
}

// Get user by email
async function getUserByEmail (email) {
  const user = await userSchema.findOne({ email: email })

  if (user) {
    return { successfull: true, userData: user }
  } else {
    return { successfull: false, error: 'User not found' }
  }
}

// Get Projects of a user  MAYBE USELESS
async function getProjectsOfUser (userId) {
  const user = await userSchema.findById(userId)

  if (user) {
    return { successfull: true, projects: user.projects }
  } else {
    return { successfull: false, error: 'User not found' }
  }
}

// EXPORTS
module.exports = ({
  loginUser,
  registerUser
})
