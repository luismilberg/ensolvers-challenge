const Tasks = require('../models/Tasks');


// Get Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find(req.query);
        res.json(tasks);
    } catch (error) {
        res.json(
            error
        )
    }
}

// Get Task
exports.getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Tasks.findById(id);
        res.json(
            task
        )
    } catch (error) {
        res.json(
            error
        )
    }
}

// Post Tasks
exports.postTasks = async (req, res) => {
    const task = new Tasks(req.body);
    try {
        const rta = await task.save();
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}

// Put Tasks
exports.putTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const rta = await Tasks.findByIdAndUpdate(id, req.body, {new: true});
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}

// Delete Tasks
exports.deleteTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const rta = await Tasks.findByIdAndDelete(id, req.body);
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}
