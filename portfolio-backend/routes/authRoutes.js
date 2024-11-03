const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser); // Route pour l'inscription
router.post('/login', loginUser); // Route pour la connexion

module.exports = router;
