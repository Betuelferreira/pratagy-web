module.exports =
  function (app) {
    let perf = app.controllers.perfil;
    let autenticar = require('../middlewares/autenticador');

    app.get("/perfil", autenticar, perf.perfil);
    app.get("/vaga/:id", autenticar, perf.show);
    app.post("/vagas", autenticar, perf.create);
    app.get("/vaga/:id/editar", autenticar, perf.edit);
    app.put("/vaga/:id", autenticar, perf.update);
    app.delete("/vaga/:id", autenticar, perf.destroy);
  }
