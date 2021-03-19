const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    // name: {
    //     type: String,
    //     required: true
    // }

    id: Number,
    name: String
});

const CatDB = mongoose.model('catdb', schema);

module.exports = CatDB;