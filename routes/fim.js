module.exports =
  function(app){
      var final = app.controllers.finalCa;
        app.get("/fim_cadastro" , final.fim);
  }