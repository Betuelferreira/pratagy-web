module.exports =
    function(app) {
        let vagac = app.controllers.vagaCad;
        app.get('/vagaCad', vagac.vagaCad);
        /*  let autenticar = require('../middlewares/autenticador');
        app.get("/vagaCad", autenticar, vagac.vagaCad);
        app.get("/vagaCad/:id", autenticar, vagac.show);
        app.post("/vagaCad", autenticar, vagac.create);
        app.get("/vagaCad/:id/editar", vagac.edit);
        app.put("/vagaCad/:id", autenticar, vagac.update);
        app.delete("/vagaCad/:id", autenticar, vagac.destroy);

 */
    }