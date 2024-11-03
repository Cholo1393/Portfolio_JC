const Comment = require('../models/commentModel');

exports.addComment = async (req, res) => {
    try {
        const { projectId, comment } = req.body;
        const newComment = new Comment({
            userId: req.user._id, // Assurez-vous que l'utilisateur est authentifié
            projectId,
            comment,
        });
        await newComment.save();
        res.status(201).json({ message: 'Commentaire ajouté avec succès', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire', error });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ projectId: req.params.projectId }).populate('userId', 'username'); // Populer pour obtenir le nom d'utilisateur
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error });
    }
};
