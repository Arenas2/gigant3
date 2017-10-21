var express = require('express');
var routeCategoria = express.Router();

var x = require("../controllers/controllerCategoria");

routeCategoria.route('/data/categoria')
        .get(x.read)
        .post(x.create);

routeCategoria.route('/data/categoria/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeCategoria;
