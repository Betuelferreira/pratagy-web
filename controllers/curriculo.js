module.exports = function(app) {
    var CurriculoController = {
        curriculo: function(req, res) {  
            let usuario = req.session.usuario;
            let params = { usuario: usuario, vagas: usuario.vagas };         
            res.render("contratante/curriculo", params);

        },

    };
    return CurriculoController;
}