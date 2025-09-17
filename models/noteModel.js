const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    userId: String,
    status: {
        type: String,
        enum: ["Created", "Deleted"]
    },
    createdAt: Date,
    updatedAt: Date
});

noteSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('Note', noteSchema)