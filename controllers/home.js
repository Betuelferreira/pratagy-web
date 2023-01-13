module.exports=function(app){
    var HomeController = {
        index:function (req, res) {
            
            let usuario = req.session.usuario;
            /* let usuario = "teste" */
            let params = { usuario: usuario };
            res.render("home/index", params );
    },
    
    };
    return HomeController;
}