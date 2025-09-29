// --- USER CONTROLLER --- //
const userPromises = require('./promises')

async function loginUser (email, password) {
    return await userPromises.loginUser(email, password)
}

async function registerUser (userData) {
    return await userPromises.registerUser(userData)
}

module.exports = ({
    loginUser, 
    registerUser
})