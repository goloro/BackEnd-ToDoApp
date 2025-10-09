// --- NOTE PROMISES --- //
const noteSchema = require('../../models/noteModel')

// PROMISES
const userPromises = require('../user/promises')

// FUNCTIONS
// Create note
async function createNote(noteData) {
  const userNotes = await noteSchema.find()

  for (let i=0; i<userNotes.length; i++) {
    if (userNotes[i].title === "") {
      console.error(`Error creating note, User already has a note with empty title`, error)
      return { successfull: false, error: 'User already has a note with empty title' }
    }
  }

  try {
    const note = await new noteSchema(noteData).save()
    userPromises.addNoteToUser(note.owner, note._id)

    console.log(`Note created {ID:${note._id}}`)
    return { successfull: true, noteData: note }
  } catch (error) {
    console.error(`Error creating note {Title:${noteData.title}}`, error)
    return { successfull: false, error: error }
  }
}

// Update note
async function updateNote(id, noteData) {
    try {
        await noteSchema.findByIdAndUpdate(id, noteData, { new: true })

        console.log(`Note updated {ID:${id}}`)
        return { successfull: true, noteData: noteData }
    } catch (error) {
        console.error(`Error updating note {ID:${id}}`, error)
        return { successfull: false, error: error }
    }
}

// Delete note
async function deleteNote(id) {
    try {
        const note = await noteSchema.findOneAndDelete({_id: id})
        userPromises.deleteNoteOfUser(note.owner, id)

        console.log(`Note deleted {ID:${id}}`)
        return { successfull: true }
    } catch (error) {
        console.error(`Error deleting note {ID:${id}}`, error)
        return { successfull: false, error: error }
    }
}

// Get note by ID
async function getNoteById(id) {
    const note = await noteSchema.findById(id)

    if (note) {
        console.error(`Note found {ID:${id}}`)
        return { successfull: true, noteData: note }
    } else {
        console.error(`Note not found {ID:${id}}`)
        return { successfull: false, error: 'Note not found' }
    }
}

// Get notes by user
async function getNotesByUser(userId) {
    const notes = await noteSchema.find({ owner: userId })

    if (notes.length > 0) {
        console.error(`Notes found {Owner:${userId}}`)
        return { successfull: true, notesData: notes }
    } else if (notes.length === 0) {
        console.log(`Notes found for user {UserID:${userId}} (EMPTY)`)
        return { successfull: false, error: 'Empty' }
    } else {
        console.error(`No notes found {Owner:${userId}}`)
        return { successfull: false, error: 'No notes found' }
    }
}

// EXPORTS
module.exports = ({
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotesByUser
})