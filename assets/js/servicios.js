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

});
