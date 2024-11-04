const mongoose = require('mongoose');

// Définition du schéma pour les projets
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Le titre est requis
    },
    description: {
        type: String,
        required: true, // La description est requise
    },
    githubLink: {
        type: String,
        required: true, // Le lien GitHub est requis
    },
    images: {
        type: [String], // Tableau d'URLs d'images
        required: true, // Les images sont requises
    },
}, { timestamps: true }); // Ajoute les timestamps pour createdAt et updatedAt

// Création du modèle Mongoose
const Project = mongoose.model('Project', projectSchema);

// Exportation du modèle
module.exports = Project;
