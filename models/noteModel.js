const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    owner : { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

noteSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('Note', noteSchema)