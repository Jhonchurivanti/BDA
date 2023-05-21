var mongoose = require('mongoose');
var EsquemaArea = mongoose.Schema({
    Nombre: String,
    Abreviatira: String,
    Estado: String
});

module.exports = mongoose.model("Areas",EsquemaArea,"Areas");