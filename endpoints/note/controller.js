// --- NOTE CONTROLLER --- //
const notePromises = require('./promises');
const userPromises = require('../user/promises');

// FUNCTIONS
// Create note
async function createNote(noteData) {
  const result = await notePromises.createNote(noteData)
  
  // Si la nota se creó exitosamente, agregarla al usuario
  if (result.successful && result.noteData) {
    await userPromises.addNoteToUser(result.noteData.owner, result.noteData._id)
  }
  
  return result
}

// Update note
async function updateNote(id, noteData) {
  return await notePromises.updateNote(id, noteData)
}

// Delete note
async function deleteNote(id) {
  const result = await notePromises.deleteNote(id)
  
  // Si la nota se eliminó exitosamente, también eliminarla del usuario
  if (result.successful && result.noteData) {
    await userPromises.deleteNoteOfUser(result.noteData.owner, id)
  }
  
  return result
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