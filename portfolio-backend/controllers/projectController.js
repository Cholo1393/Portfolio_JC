// controllers/projectController.js
const Project = require('../models/projectModel');

// Récupérer tous les projets
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error("Error retrieving projects:", error);
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un nouveau projet
exports.createProject = async (req, res) => {
    const { title, description, githubLink } = req.body;

    const project = new Project({
        title,
        description,
        githubLink
    });

    try {
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(400).json({ message: error.message });
    }
};
