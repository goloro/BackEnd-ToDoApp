// --- NOTE PROMISES --- //
const noteSchema = require('../../models/noteModel')

// FUNCTIONS
// Create note
async function createNote(noteData) {
  return await newNote.save()
}

// Delete note
async function deleteNote(id) {
  return await noteSchema.findByIdAndDelete(id)
}

// Update note
async function updateNote(id, noteData) {
  return await noteSchema.findByIdAndUpdate(id, noteData, { new: true })
}

// Get note by ID
async function getNoteById(id) {
  return await noteSchema.findById(id)
}

// Get notes by user
async function getNotesByUser(userId) {
  return await noteSchema.find({ owner: userId })
}

// EXPORTS
module.exports = ({
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotesByUser
})