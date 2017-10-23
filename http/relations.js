
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var usuario = require('./db/modeloUsuario')(conector);
var atributo = require('./db/modeloAtributo')(conector);
var categoria = require('./db/modeloCategoria')(conector);
var info = require('./db/modeloInfo')(conector);
var producto = require('./db/modeloProducto')(conector);
var marca = require('./db/modeloMarca')(conector);
var color = require('./db/modeloColor')(conector);
var galeria = require('./db/modeloGaleria')(conector);
var promo = require('./db/modeloPromo')(conector);
var catalogo = require('./db/modeloCatalogo')(conector);
var sucursal = require('./db/modeloSucursal')(conector);
var telefono = require('./db/modeloTelefono')(conector);
var cotizacion = require('./db/modeloCotizacion')(conector);
var bolsa = require('./db/modeloBolsa')(conector);


//- Relations

producto.belongsTo(categoria, {foreignKey: 'IdCategoria'});
producto.belongsTo(marca, {foreignKey: 'IdMarca'});
producto.belongsTo(color, {foreignKey: 'IdColor'});

atributo.belongsTo(categoria, {foreignKey: 'IdCategoria'});

info.belongsTo(producto, {foreignKey: 'IdProducto'});
info.belongsTo(atributo, {foreignKey: 'IdAtributo'});

producto.hasMany(info, {foreignKey: 'IdProducto'});
atributo.hasMany(info, {foreignKey: 'IdAtributo'});

telefono.belongsTo(sucursal, {foreignKey: 'IdSucursal'});
sucursal.hasMany(telefono, {foreignKey: 'IdSucursal'});


producto.belongsToMany(cotizacion, {as:'Cotizacion', through: bolsa, foreignKey: 'id_producto'});
cotizacion.belongsToMany(producto, {as:'Producto', through: bolsa, foreignKey: 'id_cotizacion'});


module.exports.usuario = usuario;
module.exports.atributo = atributo;
module.exports.categoria = categoria;
module.exports.info = info;
module.exports.producto = producto;
module.exports.marca = marca;
module.exports.color = color;
module.exports.galeria = galeria;
module.exports.promo = promo;
module.exports.catalogo = catalogo;
module.exports.sucursal = sucursal;
module.exports.telefono = telefono;
module.exports.cotizacion = cotizacion;
module.exports.bolsa = bolsa;
