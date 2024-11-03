const express = require('express');
const { getProjects } = require('../controllers/projectController');

const router = express.Router();

// Route pour obtenir tous les projets
router.get('/', getProjects);

module.exports = router;
