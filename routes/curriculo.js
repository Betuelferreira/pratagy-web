module.exports =
    function(app) {
        let curric = app.controllers.curriculo
        let autenticar = require('../middlewares/autenticador');

        app.get('/curriculo', autenticar, curric.curriculo)
    }