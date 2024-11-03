const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware'); // Vérifiez le chemin

const router = express.Router();

router.post('/', authMiddleware, addComment); // Ajouter un commentaire
router.get('/:projectId', getComments); // Récupérer les commentaires d'un projet

module.exports = router;
