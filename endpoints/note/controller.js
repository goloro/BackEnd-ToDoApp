// --- NOTE CONTROLLER --- //
const notePromises = require('./promises');

// FUNCTIONS
// Create note
async function createNote(noteData) {
  return await notePromises.createNote(noteData)
}

// Update note
async function updateNote(id, noteData) {
  return await notePromises.updateNote(id, noteData)
}

// Delete note
async function deleteNote(id) {
  return await notePromises.deleteNote(id)
}

// Get note by ID
async function getNoteById(id) {
  return await notePromises.getNoteById(id)
}

// Get notes by user
async function getNotesByUser(userId) {
  return await notePromises.getNotesByUser(userId)
}

// EXPORTS
module.exports = ({
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotesByUser
})