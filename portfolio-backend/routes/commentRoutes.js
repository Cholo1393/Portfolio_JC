// routes/commentRoutes.js

const express = require('express');
const { postComment, getComments } = require('../controllers/commentController');

const router = express.Router();

router.post('/:projectId', postComment);
router.get('/:projectId', getComments);

module.exports = router;
