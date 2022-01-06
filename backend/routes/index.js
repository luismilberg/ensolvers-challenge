const express = require('express');
const router = express.Router();

// Controladores
const foldersControllers = require('../controllers/foldersController');
const tasksControllers = require('../controllers/tasksController');

// Middlewares

// Rutas
module.exports = function(){

    // Folders
    router.get('/folders', foldersControllers.getFolders);
    router.get('/folders/:id', foldersControllers.getFolder);
    router.post('/folders', foldersControllers.postFolders);
    router.put('/folders/:id', foldersControllers.putFolders);
    router.delete('/folders/:id', foldersControllers.deleteFolders);

    // Tasks
    router.get('/tasks', tasksControllers.getTasks);
    router.get('/tasks/:id', tasksControllers.getTask);
    router.post('/tasks', tasksControllers.postTasks);
    router.put('/tasks/:id', tasksControllers.putTasks);
    router.delete('/tasks/:id', tasksControllers.deleteTasks);

    return router;
}