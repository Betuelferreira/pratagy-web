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
            console.log(usuario)
            res.redirect("/perfil");
        },
        show: function (req, res) {
            var id = req.params.id,
            vaga = req.session.usuario.vagas[id],
            params = { vaga: vaga, id: id };
            res.render("perfil/show", params);
        },
        // edit: function (req, res) {
        //     var id = req.params.id,
        //     usuario = req.session.usuario,
        //     vaga = usuario.vagas[id],
        //     params = { usuario: usuario, vaga: vaga, id: id };
        //     res.render("perfil/edit", params);
        //     },
        // update: function (req, res) {
        //     var vaga = req.body.vaga,
        //     usuario = req.session.usuario;
        //     usuario.vagas[req.params.id] = vaga;
        //     res.redirect("/contatos");
        //     },
    };
    return PerfilController;
}