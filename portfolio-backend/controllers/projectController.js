const Project = require('../models/projectModel');

// Récupérer tous les projets
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des projets', error });
    }
};
