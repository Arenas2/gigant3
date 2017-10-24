app.service('Usuario', function() {

    this.obtener = function(id) { return axios('/data/usuario/' + id) }

});

app.service('Producto', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/producto')}

    this.one = function(id) {return axios('/data/producto/' + id)}

	this.filtro = function(peticion) {return axios.post('/data/filtro', peticion)}

    this.atributosdisponibles = function(id) {return axios('/data/atributoXcategoria/' + id)}
    this.atributos = function(id) {return axios('/data/infoXproducto/' + id)}

	this.crearInfo = function(info) {return axios.post('/data/info', info)}
	this.editarInfo = function(info) {return axios.put('/data/info/' + info.id, info)}


	this.categorias = function() {return axios('/data/categoria')}
	this.marcas = function() {return axios('/data/marca')}
	this.colores = function() {return axios('/data/color')}

    this.crear = function(producto){return axios.post('/data/producto', producto)}
    this.editar = function(producto) {return axios.put('/data/producto/' + producto.id, producto)}
    this.eliminar = function(id) {return axios.delete('/data/producto/' + id)}

});


app.service('Catalogo', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/catalogo')}

});


app.service('Cotizacion', function($http, alertas, $q){

    this.crear = function(cotizacion) {return axios.post('/data/cotizacion', cotizacion)}
    this.obtener = function() {return axios('/data/cotizacion')}

});


app.service('Galeria', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/galeria/')}
    this.crear = function(galeria){return axios.post('/data/galeria', galeria)}
    this.editar = function(galeria) {return axios.put('/data/galeria/' + galeria.id, galeria)}
    this.eliminar = function(id) {return axios.delete('/data/galeria/' + id)}

});

app.service('Promo', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/promo/')}
    this.crear = function(promo){return axios.post('/data/promo', promo)}
    this.editar = function(promo) {return axios.put('/data/promo/' + promo.id, promo)}
    this.eliminar = function(id) {return axios.delete('/data/promo/' + id)}

});

app.service('Catalogo', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/catalogo/')}
    this.crear = function(catalogo){return axios.post('/data/catalogo', catalogo)}
    this.editar = function(catalogo) {return axios.put('/data/catalogo/' + catalogo.id, catalogo)}
    this.eliminar = function(id) {return axios.delete('/data/catalogo/' + id)}

});

app.service('Sucursal', function($http, alertas, $q){

    this.obtener = function() {return axios('/data/sucursal/')}
    this.crear = function(sucursal){return axios.post('/data/sucursal', sucursal)}
    this.editar = function(sucursal) {return axios.put('/data/sucursal/' + sucursal.id, sucursal)}
    this.eliminar = function(id) {return axios.delete('/data/sucursal/' + id)}

});
