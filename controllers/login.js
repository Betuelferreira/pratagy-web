module.exports = function(app) {
    var LoginController = {
        login: function(req, res) {
            res.render("contratante/login");
        },
        logar: function(req, res) {
            let email = req.body.usuario.email;
            let senha = req.body.usuario.senha;
            if (email && senha) {
                let usuario = req.body.usuario;
                usuario["vagasEfetivado"] = [];
                usuario["vagasEstagio"] = [];
                usuario["vagasAprendiz"] = [];
                console.log(usuario)
                req.session.usuario = usuario;
                res.redirect("/vagaCad");
            } else {
                res.redirect("/login");
            }
        },

        logout: function(req, res){
            req.session.destroy();
            res.redirect("/login");

        },       
    };
    return LoginController;
};