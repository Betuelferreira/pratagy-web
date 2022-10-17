module.exports =
  function(app){
      var perf = app.controllers.perfil;
        app.get("/perfil" , perf.perfil);
  }
