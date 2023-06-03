const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.get('/', taskController.get);
router.post('/task', taskController.post);
router.put('/task/:id', taskController.put);
router.delete('/task/:id', taskController.delete);

module.exports = router;