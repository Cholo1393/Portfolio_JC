// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { createProject, getAllProjects } = require('../controllers/projectController');

// POST pour ajouter un nouveau projet avec upload d'images
router.post('/', upload.array('images', 5), createProject); // Accepte jusqu'à 5 images
router.get('/', getAllProjects);

module.exports = router;
