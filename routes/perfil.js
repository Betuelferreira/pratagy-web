module.exports =
  function (app) {
    let perf = app.controllers.perfil;
    app.get("/perfil", perf.perfil);
    app.get("/vaga/:id", perf.show);
    app.post("/vagas", perf.create);
    // app.get("/perfil/:id/editar", perf.edit);
    // app.put("/perfil/:id", perf.update);
    // app.delete("/perfil/:id", perf.destroy);

  }
