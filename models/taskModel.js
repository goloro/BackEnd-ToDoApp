const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  title : { type: String, required: true },
  status: { type: String, enum: ['checked', 'unchecked'], default: 'unchecked' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

taskSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

// EXPORTS
module.exports = mongoose.model('Task', taskSchema)
