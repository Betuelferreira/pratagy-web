module.exports =
  function(app){
      var log = app.controllers.login;
        app.get("/login" , log.login);
  }
