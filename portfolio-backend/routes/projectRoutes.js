// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProject, getAllProjects } = require('../controllers/projectController');

// POST pour ajouter un nouveau projet
router.post('/', createProject); // Pas besoin d'upload ici
router.get('/', getAllProjects);

module.exports = router;
