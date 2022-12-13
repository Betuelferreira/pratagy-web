module.exports = function (app) {
    var PerfilController = {
        perfil: function (req, res) {
            let usuario = req.session.usuario;
            let params = { usuario: usuario, vagas:usuario.vagas };
            res.render("contratante/perfil", params);
        },
        create: function (req, res) {
            var vaga = req.body.vaga,
            usuario = req.session.usuario;
            usuario.vagas.push(vaga);
            
            res.redirect("/perfil");
        },
        show: function (req, res) {
            var id = req.params.id,
            vaga = req.session.usuario.vagas[id],
            params = { vaga: vaga, id: id };
            res.render("contratante/vaga", params);
        },
        edit: function (req, res) {
            var id = req.params.id,
            usuario = req.session.usuario,
            vaga = usuario.vagas[id],
            params = { usuario: usuario, vaga: vaga, id: id };
            res.render("contratante/editar", params);
            },
        update: function (req, res) {
            var vaga = req.body.vaga,
            usuario = req.session.usuario;
            usuario.vagas[req.params.id] = vaga;
            res.redirect("/perfil");
            },
        destroy: function (req, res) {
            var usuario = req.session.usuario,
            id = req.params.id;
            usuario.vagas.splice(id, 1);
            res.redirect("/perfil");
            },
    };
    return PerfilController;
}