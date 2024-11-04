const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);
router.get('/:projectId', commentController.getCommentsByProjectId);

module.exports = router;
