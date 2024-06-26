const express = require('express');
const { Task, tasks } = require('../models/taskModel');
const router = express.Router();

router.post('/', (req, res) => {
    const task = new Task(req.body.title);
    tasks.push(task);
    res.status(201).json(task);
});

router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});

router.get('/', (req, res) => {
    res.json(tasks);
});

router.delete('/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
