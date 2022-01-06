const Folders = require('../models/Folders');
const Tasks = require('../models/Tasks');

// Get Folders
exports.getFolders = async (req, res) => {
    try {
        const folders = await Folders.find(req.query);
        res.json(
            folders
        );

    } catch (error) {
        res.json(
            error
        )
    }
}

// Get Task
exports.getFolder = async (req, res) => {
    const { id } = req.params;

    try {
        const folder = await Folders.findById(id);
        res.json(
            folder
        );
    } catch (error) {
        res.json(
            error
        )
    }
}

// Post Folders
exports.postFolders = async (req, res) => {
    const folder = new Folders(req.body);

    try {
        const rta = await folder.save();
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}

// Put Folders
exports.putFolders = async (req, res) => {
    try {
        const rta = await Folders.findByIdAndUpdate(req.params.id, req.body);
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}

// Delete Folders
exports.deleteFolders = async (req, res) => {
    const { id } = req.params;

    try {
        // Obtener todas las tasks asociadas al folder
        const idsTasks = await Tasks.find({ folder: id }, '_id');

        // Eliminar las tasks
        const eliminados = await Tasks.deleteMany({ _id: { $in: idsTasks } });

        // Eliminar la folder
        const rta = await Folders.findByIdAndRemove(id);
        res.json(
            rta
        )
    } catch (error) {
        res.json(
            error
        )
    }
}
