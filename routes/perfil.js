module.exports =
  function (app) {
    let perf = app.controllers.perfil;
    app.get("/perfil", perf.perfil);
    app.get("/vaga/:id", perf.show);
    app.post("/vagas", perf.create);
    app.get("/vaga/:id/editar", perf.edit);
    app.put("/vaga/:id", perf.update);
    app.delete("/vaga/:id", perf.destroy);
  }
