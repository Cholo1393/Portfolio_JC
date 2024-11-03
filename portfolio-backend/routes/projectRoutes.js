// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET tous les projets
router.get('/', projectController.getAllProjects);

// POST un nouveau projet
router.post('/', projectController.createProject);

module.exports = router;
