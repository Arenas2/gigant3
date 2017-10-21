var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Producto = sequelize.define('producto', {
        nombre:  Sequelize.STRING,
        imagen: {
            type: Sequelize.BLOB('medium'),
            get() {

                    var imagenBin = this.getDataValue('imagen');
                    if(imagenBin !== null){
                    var Imagenes = new Buffer(imagenBin).toString('ascii');
                    return Imagenes
                    }
            },
            allowNull: true
        }
    })
    return Producto;
};

module.exports = ex;
