// controllers/commentController.js
const Comment = require('../models/commentModel');

// Récupérer tous les commentaires pour un projet donné
exports.getCommentsByProjectId = async (req, res) => {
    try {
        const comments = await Comment.find({ projectId: req.params.projectId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des commentaires.", error });
    }
};

// Créer un nouveau commentaire
exports.createComment = async (req, res) => {
    const { username, text } = req.body;
    const projectId = req.params.projectId; // On récupère l'ID du projet depuis les paramètres de la requête

    try {
        const newComment = new Comment({ username, text, projectId });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout du commentaire.", error });
    }
};
