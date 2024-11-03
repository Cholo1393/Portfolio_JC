const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    comment: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500, // Limite la longueur du commentaire
    },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
