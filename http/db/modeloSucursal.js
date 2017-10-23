var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Sucursal = sequelize.define('sucursal', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        calle: Sequelize.STRING,
        codigo_postal: Sequelize.STRING,
        referencia: Sequelize.STRING

    })

    return Sucursal;
};

module.exports = ex;
