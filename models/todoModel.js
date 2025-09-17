const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    finish: {
        type: Boolean,
        default: false
    },
    projectId: String,
    createdAt: Date,
    updatedAt: Date
});

todoSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('ToDO', todoSchema)