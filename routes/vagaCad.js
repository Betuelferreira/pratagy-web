module.exports =
    function(app) {
        let vagac = app.controllers.vagaCad;
        let autenticar = require('../middlewares/autenticador');

        app.get('/vagaCad', autenticar,vagac.vagaCad);
    }