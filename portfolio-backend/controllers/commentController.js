// controllers/commentController.js

const Comment = require('../models/commentModel');

exports.postComment = async (req, res) => {
    const { projectId } = req.params;
    const { userId, text } = req.body;

    try {
        const comment = new Comment({ projectId, userId, text });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de l\'ajout du commentaire', error });
    }
};

exports.getComments = async (req, res) => {
    const { projectId } = req.params;

    try {
        const comments = await Comment.find({ projectId }).populate('userId', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la récupération des commentaires', error });
    }
};
