const { Schema, model } = require('mongoose');

const foldersSchema = new Schema({
    nombre: String,
});

module.exports = model('Folders', foldersSchema);