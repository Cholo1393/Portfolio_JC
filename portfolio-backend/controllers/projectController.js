// controllers/projectController.js
const Project = require('../models/projectModel');

// Ajouter un nouveau projet
exports.createProject = async (req, res) => {
    const { title, description, githubLink, images } = req.body;

    const project = new Project({
        title,
        description,
        githubLink,
        images, // Ajoutez les images à votre modèle
    });

    try {
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error("Erreur lors de la création du projet:", error);
        res.status(400).json({ message: error.message });
    }
};

// Récupérer tous les projets
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        res.status(500).json({ message: error.message });
    }
};
