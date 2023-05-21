var Controlador = require("./controlador");
var mainDir = "";

module.exports = {
    principal: function(app) {
        // Obtener todas las areas
        app.get("/api/areas", Controlador.getAreas);

        // Crear una nueva area
       app.post('/api/area', Controlador.setAreas);

      //  app.post('/api/area', function(req, res) {
        //    Controlador.setAreas
    //    });

        // Modificar los datos de una area
        app.put('/api/area/:area_id', Controlador.updateArea);


        // Borra una ara
        app.delete('/api/area/:area_id', Controlador.removeArea);

        // A la aplicacion principal
        app.get('*', function (req, res) {
            res.sendFile( mainDir +'/angular/index.html');
        })
    },
    iniciar: function(main) {
        mainDir = main
    }
};

