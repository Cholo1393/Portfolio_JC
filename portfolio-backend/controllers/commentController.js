const Comment = require('../models/commentModel');

exports.createComment = async (req, res) => {
    const { projectId, username, text } = req.body;

    try {
        const newComment = new Comment({
            projectId,
            username,
            text,
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du commentaire' });
    }
};

exports.getCommentsByProjectId = async (req, res) => {
    const { projectId } = req.params;

    try {
        const comments = await Comment.find({ projectId }).populate('projectId');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
    }
};
