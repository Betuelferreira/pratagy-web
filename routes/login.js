module.exports =
  function(app){
      let log = app.controllers.login;
      app.get('/login', log.login);
      app.post('/logar', log.logar);
  }
