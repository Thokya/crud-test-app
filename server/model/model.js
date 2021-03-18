const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const CatDB = mongoose.model('catdb', schema);

module.exports = CatDB;