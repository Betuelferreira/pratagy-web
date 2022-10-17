module.exports =
  function(app){
      var cadastrar = app.controllers.cadastro;
        app.get("/cadastro" , cadastrar.cadastro);
  }