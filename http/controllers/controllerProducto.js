var _ = require('lodash');

var db = require('../relations');
var producto = db.producto;
var categoria = db.categoria;
var info = db.info;
var atributo = db.atributo;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;

    producto.create(data).then(function(result) {
        res.status(200).jsonp(result.id);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    producto.findById(id).then(function(producto) {
        producto.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    producto.update(data, {
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
        producto.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        producto.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};


ex.filtro = function(req, res, next) {

    var data = req.body;

    data.include = [
        {
            model : info,
            attributes: ['id', 'contenido'],
            include : [
                {
                    model: atributo,
                    attributes: ['id', 'nombre']
                }
            ]
        }
    ]

	// console.log(data);

    // var indexAreas = _.findIndex(data.include, ['model', 'categoria']);
    //
    // console.log(indexAreas);
    //
    // _.updateWith(data, 'include[' + indexAreas + ']', _.constant({model: categoria, where: data.include[indexAreas].where}), data);

    producto.findAll(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};
