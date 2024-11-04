// models/projectModel.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
    imageUrls: [{ type: String }], 
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
