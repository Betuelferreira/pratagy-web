module.exports = function (app) {
    var LoginController = {
        login: function (req, res) {
            res.render("contratante/login");
        },
        logar: function (req, res) {
            //#1
            let email = req.body.usuario.usuario;
            let nome = req.body.usuario.nome;
            if (email && nome) {
                let usuario = req.body.usuario;
                usuario["contatos"] = [];
                req.session.usuario = usuario;
                res.redirect("/contatos");
            } else {
                res.redirect("/");
            }
        },
    };
    return LoginController;
}