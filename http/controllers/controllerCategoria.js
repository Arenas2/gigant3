var db = require('../relations');
var categoria = db.categoria;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    categoria.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    categoria.findById(id).then(function(categoria) {
        categoria.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    categoria.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        categoria.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        categoria.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
