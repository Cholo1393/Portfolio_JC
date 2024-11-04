const express = require('express');
const { getCommentsByProjectId, addComment } = require('../controllers/commentController');
const router = express.Router();

// Route pour récupérer les commentaires par ID de projet
router.get('/:projectId', getCommentsByProjectId);

// Route pour ajouter un commentaire
router.post('/', addComment);

module.exports = router;
