module.exports=function(app){
    var HomeController = {
        index:function (req, res) {
           /*  let usuario = req.session.usuario;
            let params = { usuario: usuario, vagas: usuario.vagas }; */ 
            res.render("home/index", /* params */);
    },
    
    };
    return HomeController;
}