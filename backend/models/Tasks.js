const { Schema, model } = require('mongoose');

const tasksSchema = new Schema({
    tarea: String,
    realizado: {
        type: Boolean,
        default: false
    },
    folder: {
        type: Schema.ObjectId,
        ref: 'Folders'
    }
});

module.exports = model('Tasks', tasksSchema);