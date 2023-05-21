//  Inicialización de Modulos

var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas.js');


// Parte de la configuracion

mongoose.connect('mongodb://127.0.0.1:27017/appdb2');

mongoose.set('strictQuery', false);

app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


// Carga de las rutas

rutas.iniciar(__dirname);
rutas.principal(app);

// Iniciar el servidor

app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");