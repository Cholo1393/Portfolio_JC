const Project = require('../models/projectModel');

// Ajouter un nouveau projet
exports.createProject = async (req, res) => {
    const { title, description, githubLink } = req.body;

    // Obtenez les URLs des images téléchargées
    const images = req.files.map(file => file.path); // file.path contient l'URL de l'image téléchargée

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
        console.error("Error creating project:", error);
        res.status(400).json({ message: error.message });
    }
};
