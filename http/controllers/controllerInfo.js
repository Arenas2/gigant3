var db = require('../relations');
var info = db.info;
var atributo = db.atributo;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    info.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};


ex.infoXproducto = function(req, res, next) {

    var id = req.params.id;

    info.findAll({
        where:{
            idProducto: id
        },
        include: [
            {
                model: atributo,
                attributes:
    					['id', 'nombre']
            }
        ],
        attributes: ['id', 'contenido']
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};



ex.delete = function(req, res, next) {

    var id = req.params.id;

    info.findById(id).then(function(info) {
        info.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    info.update(data, {
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
        info.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        info.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
