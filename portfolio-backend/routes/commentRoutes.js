// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Récupérer les commentaires par ID de projet
router.get('/:projectId', commentController.getCommentsByProjectId);

// Créer un nouveau commentaire
router.post('/:projectId', commentController.createComment);

module.exports = router;
