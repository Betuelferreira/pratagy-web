module.exports =
    function(app) {
        let vaga = app.controllers.vagaCad;
        app.get('/vagaCad', vaga.vagaCad);
        /*  let autenticar = require('../middlewares/autenticador'); */
        /* app.post('/vagaCade', vaga.vagaCade); */


    }