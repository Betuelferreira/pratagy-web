module.exports =
    function(app) {
        let vaga = app.controllers.vagaCad;
        app.get('/vagaCad', vaga.vagaCad);
        /* app.post('/vagaCade', vaga.vagaCade); */
    }