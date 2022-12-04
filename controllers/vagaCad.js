module.exports = function(app) {
    var VagaCadController = {
        vagaCad: function(req, res) {
            res.render("contratante/vagaCad");

        },

    };
    return VagaCadController;
}