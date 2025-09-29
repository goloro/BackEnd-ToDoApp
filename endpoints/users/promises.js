// --- USER PROMISES --- //
const userSchema = require('../../models/usersModel')

async function loginUser (email, password) {
    console.log(email)
    console.log(password)
    const user = await userSchema.findOne({email: email, password: password})
    
    if (user) {
        console.log(`Login Successfull {Email: ${email} Password: ${password}}`)
        return { successfull: true, userData: user }
    }

    console.log(`Login Error {Email: ${email} Password: ${password}}`)
    return { successfull: false }
}

async function registerUser (userData) {
    const userExists = await userSchema.findOne({email: userData.email})

    if (!userExists) {
        userData.icon = `https://api.multiavatar.com/${userData.username}`

        try {
            new userSchema(userData).save()

            console.log(`Sign Up Successfull {Email: ${userData.email} Password: ${userData.password}}`)
            return { successfull: true, userData: userData }
        } catch(error) {
            console.log(`Sign Up Error {Email: ${userData.email} Password: ${userData.password}}`)
            return { successfull: false }
        }
    }

    return { successfull: false }
}

module.exports = ({
    loginUser, 
    registerUser
})