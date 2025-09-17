const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Completed", "In Procces", "Not Started", "Bloqued", "Deleted"]
    },
    backgroundColor: {
        type: String,
        default: "#eb5d5d",
    },
    textColor: {
        type: String,
        default: "#f5f5f5",
    },
    link: String,
    todolist: [{
        id: String,
        finish: Boolean,
    }],
    percentage: Number,
    documentation: String,
    createdAt: Date,
    updatedAt: Date
});

projectSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('Project', projectSchema)