const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        /*validate: (value) => {
            return validator.isEmail(value)
        }*/
    },    
    password: {
        type: String,
        required: true,
    },
    icon: String,
    stats: {
        completed: {
            type: Number,
            default: 0,
        },    
        inProcces: {
            type: Number,
            default: 0,
        },
        notStarted: {
            type: Number,
            default: 0,
        },
        bloqued: {
            type: Number,
            default: 0,
        },
    },
    createdAt: Date,
    updatedAt: Date
});

userSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now

    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('User', userSchema)