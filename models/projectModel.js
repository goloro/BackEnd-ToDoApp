const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Sub-schema
const colorsSchema = new Schema({
  background1: { type: String, default: '#a4dfef' },
  background2: { type: String, default: '#00c6fb' },
  text: { type: String, default: '#000000' }
})

// Main project schema
const projectSchema = new Schema({
  owner : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  colors: { 
    type: colorsSchema,
    default: {
      background1: '#a4dfef',
      background2: '#00c6fb', 
      text: '#000000'
    }
  },
  documentation: { type: String },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

projectSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

// EXPORTS
module.exports = mongoose.model('Project', projectSchema)
