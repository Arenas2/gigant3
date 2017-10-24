app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

	function complejo(url, template, controller, oz, params) {
	    let obj = {
	        url: url,
	        params: params,
	        views: {
	            'main': {
	                templateUrl: template,
	                controller: controller + ' as ctrl'
	            }
	        },
	        resolve: {
	            loadMyCtrl: [
	                '$ocLazyLoad',
	                function($ocLazyLoad) {
	                    return $ocLazyLoad.load([oz]);
	                }
	            ]
	        }
	    }
	    return obj
	}

	function simple(url, template) {
	    let obj = {
	        url: url,
	        views: {
	            'main': {
	                templateUrl: template
	            }
	        }
	    }
	    return obj
	}

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', complejo('/', '/admin/home', 'homeCtrl', 'ozAdminHome'))
	.state('producto', complejo('/producto', '/admin/producto', 'productoCtrl', 'ozAdminProducto'))
	.state('infoProducto', complejo('/infoProducto', '/admin/infoProducto', 'infoproductoCtrl', 'ozAdminInfoProducto', { 'id' : null}))
	.state('galeria', complejo('/galeria', '/admin/galeria', 'galeriaCtrl', 'ozAdminGaleria'))
	.state('promo', complejo('/promo', '/admin/promo', 'promoCtrl', 'ozAdminPromo'))
	.state('catalogo', complejo('/catalogo', '/admin/catalogo', 'catalogoCtrl', 'ozAdminCatalogo'))
	.state('sucursal', complejo('/sucursal', '/admin/sucursal', 'sucursalCtrl', 'ozAdminSucursal'))
	.state('telefono', complejo('/telefono', '/admin/telefono', 'telefonoCtrl', 'ozAdminTelefono'))
	.state('cotizaciones', complejo('/cotizaciones', '/admin/cotizaciones', 'cotizacionesCtrl', 'ozAdminCotizaciones'))
}]);
