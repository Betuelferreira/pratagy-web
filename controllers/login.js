module.exports=function(app){
    var LoginController = {
        login:function (req, res) {
            res.render("contratante/login");
    },
    
    };
    return LoginController;
}