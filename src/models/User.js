const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: String,
        default: Date.now
    },
    // question: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Question'
    // },
    score: {
        type: Number,
        default: 0
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", UserSchema);