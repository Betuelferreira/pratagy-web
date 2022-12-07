module.exports=function(app){
    var CurriculoController = {
        curriculo:function (req, res) {
            res.render("contratante/curriculo");
    },
    
    };
    return CurriculoController;
}