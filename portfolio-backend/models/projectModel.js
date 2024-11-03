const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    githubLink: { type: String },
    image: { type: String }, // Pour l'URL de l'image depuis Cloudinary
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
