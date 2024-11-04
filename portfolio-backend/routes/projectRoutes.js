// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../config/multerConfig'); 
// GET tous les projets
router.get('/', projectController.getAllProjects);

// POST un nouveau projet avec upload d'images
router.post('/', upload.array('images', 5), projectController.createProject); // Permet jusqu'à 5 images

module.exports = router;
