const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAll);
router.get('/task/:id', TaskController.getById);

router.post('/', TaskController.addTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;