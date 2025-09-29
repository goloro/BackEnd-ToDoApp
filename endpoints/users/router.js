// --- USER ROUTER --- //
const express = require('express');

const router = express.Router();

const userController = require('./controller')

router.get ('/login/:email/:password', async (req, res) => {
    res.send(await userController.loginUser(req.params.email, req.params.password))
})

router.post ('/register', async (req, res) => {
    res.send(await userController.registerUser(req.body))
})

module.exports = router