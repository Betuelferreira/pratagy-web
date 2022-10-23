module.exports=function(app){
    var PerfilController = {
        perfil:function (req, res) {
            let usuario = req.session.usuario;
            let params = { usuario: usuario };
            res.render("contratante/perfil", params);
        },
    
    };
    return PerfilController;
}