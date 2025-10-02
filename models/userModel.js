const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  icon: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

// EXPORTS
module.exports = mongoose.model('User', userSchema)
