// --- NOTE ROUTER --- //
const express = require('express');

const router = express.Router();

const noteController = require('./controller');

// ROUTES
// Create a note
router.post('/create', async (req, res) => {
  res.send(await noteController.createNote(req.body))
})

// Delete a note by ID
router.delete('/delete/:id', async (req, res) => {
  res.send(await noteController.deleteNote(req.params.id))
})

// Update a note by ID
router.put('/update/:id', async (req, res) => {
  res.send(await noteController.updateNote(req.params.id, req.body))
})

// Get note by ID
router.get('/getById/:id', async (req, res) => {
  res.send(await noteController.getNoteById(req.params.id))
})

// Get notes of a user
router.get('/getNotesByUser/:userId', async (req, res) => {
  res.send(await noteController.getNotesByUser(req.params.userId))
})

// EXPORTS
module.exports = router;