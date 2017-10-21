
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

//- Relations

producto.belongsTo(categoria, {foreignKey: 'IdCategoria'});
producto.belongsTo(marca, {foreignKey: 'IdMarca'});
producto.belongsTo(color, {foreignKey: 'IdColor'});

atributo.belongsTo(categoria, {foreignKey: 'IdCategoria'});

info.belongsTo(producto, {foreignKey: 'IdProducto'});
info.belongsTo(atributo, {foreignKey: 'IdAtributo'});

producto.hasMany(info, {foreignKey: 'IdProducto'});
atributo.hasMany(info, {foreignKey: 'IdAtributo'});



module.exports.usuario = usuario;
module.exports.atributo = atributo;
module.exports.categoria = categoria;
module.exports.info = info;
module.exports.producto = producto;
module.exports.marca = marca;
module.exports.color = color;
