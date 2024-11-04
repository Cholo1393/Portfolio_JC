const Comment = require('../models/commentModel');

// Récupérer les commentaires par ID de projet
exports.getCommentsByProjectId = async (req, res) => {
    try {
        const comments = await Comment.find({ projectId: req.params.projectId }).populate('projectId', 'title'); // Optionnel : vous pouvez peupler le titre du projet si nécessaire
        res.status(200).json(comments);
    } catch (error) {
        console.error('Erreur lors de la récupération des commentaires:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error: error.message });
    }
};

// Ajouter un commentaire
exports.addComment = async (req, res) => {
    const { projectId, username, text } = req.body;

    // Validation des données entrantes
    if (!projectId || !username || !text) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    const newComment = new Comment({ projectId, username, text });

    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Erreur lors de l\'ajout du commentaire:', error);
        res.status(400).json({ message: 'Erreur lors de l\'ajout du commentaire', error: error.message });
    }
};
