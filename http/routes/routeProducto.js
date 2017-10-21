var express = require('express');
var routeProducto = express.Router();

var x = require("../controllers/controllerProducto");

routeProducto.route('/data/producto')
        .get(x.read)
        .post(x.create);

routeProducto.route('/data/filtro')
        .post(x.filtro);

routeProducto.route('/data/producto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeProducto;
