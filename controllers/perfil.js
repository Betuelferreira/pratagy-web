module.exports=function(app){
    var PerfilController = {
        perfil:function (req, res) {
            res.render("contratante/perfil");
    },
    
    };
    return PerfilController;
}