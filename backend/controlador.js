var Areas = require("./modelos/area");

//Obtiene todas las areas
exports.getAreas = function(req, res) {
    Areas.find({}, function (err, areas) {
        if(err)
            res.send(err);
        res.json(areas);

    });
}

// Adiciona un nuveo objeto Area en la base de datos

exports.setAreas = function(req, res) {
    Areas.create( {Nombre: req.body.Nombre,
                  Abreviatura: req.body.Abreviatura,
                  Estado: req.body.Estado }, function(err, area) {
        if (err)
           res.send(err);
        
        Areas.find({}, function ( err, areas) {
            if ( err)
               res.send(err);
            res.json(areas);

        });
    });
}

// Modifica un objeto area de la base de datos

exports.updateArea = function(req, res) {
    Areas.updateOne( {_id: req.params.area_id},
        {$set: {Nombre: req.body.Nombre,
                Abreviatura: req.body.Abreviatura,
                Estado: req.body.Estado }}, function(err, area) {
                    if (err)
                        res.send(err);
                    Areas.find( function(err, area) {
                        if ( err)
                           res.send(err);
                        res.json(area);
                    });
                });
}

// Elimina un objeto Area de la base de datos

exports.removeArea = function( req, res) {
    Areas.remove( {_id: req.params.area_id}, function(err, area) {
        if (err)
           res.send(err);

        Areas.find( function( err, areas) {
            if ( err)
               res.send(err);
            res.json(areas);
        });
    });
}