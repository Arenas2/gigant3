app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
            {
                name: 'ozHome',
                files: ['js/main/frags/home.js']
            },
			{
				name: 'ozProductos',
				files: ['js/main/frags/productos.js']
			},
            {
				name: 'ozFiltro',
				files: ['js/main/frags/filtro.js']
			},
			{
				name: 'ozGaleria',
				files: ['js/main/frags/galeria.js']
			},
            {
                name: 'ozPromos',
                files: ['js/main/frags/promociones.js']
            },
            {
                name: 'ozUbicaciones',
                files: ['js/main/frags/ubicaciones.js']
            },
            {
                name: 'ozCatalogos',
                files: ['js/main/frags/catalogos.js']
            },
            {
                name: 'ozNosotros',
                files: ['js/main/frags/nosotros.js']
            },
			{
				name: 'ozAdminHome',
				files: ['js/admin/frags/home.js']
			},
			{
				name: 'ozAdminProducto',
				files: ['js/admin/frags/producto.js']
			},
            {
                name: 'ozAdminGaleria',
                files: ['js/admin/frags/galeria.js']
            },
            {
                name: 'ozAdminPromo',
                files: ['js/admin/frags/promo.js']
            },
            {
                name: 'ozAdminCatalogo',
                files: ['js/admin/frags/catalogo.js']
            },
            {
                name: 'ozAdminSucursal',
                files: ['js/admin/frags/sucursal.js']
            },
			{
				name: 'ozAdminInfoProducto',
				files: ['js/admin/frags/infoproducto.js']
			},
            {
				name: 'ozAdminCotizaciones',
				files: ['js/admin/frags/cotizaciones.js']
			}
        ]
    });
}]);
