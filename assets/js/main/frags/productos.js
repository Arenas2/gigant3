var app = angular.module('myapp');

app.controller('productosCtrl', function($scope, Producto, alertas, $mdDialog) {

    Producto.categorias().then(res => {
        $scope.categorias = res.data
        $scope.$digest();
    })

	$scope.cotizacion = {
        bolsa : []
    };

    $scope.vaciar = function(){
        $scope.cotizacion.bolsa = [];
    }

    $scope.enviar = function(ev){
        $mdDialog.show({
            templateUrl: '/partials/cotizacion',
            parent: angular.element(document.body),
            locals: {
                cotizacion: $scope.cotizacion
            },
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, Producto, alertas, $state, cotizacion, Cotizacion){

                $scope.cotizacion = cotizacion;

                $scope.submit = function(cotizacion){

                    Cotizacion.crear(cotizacion).then(res =>{
                        $mdDialog.hide(true);
                        alertas.mostrarToastEstandar("Cotizacion mandada");
                    })
                    // $mdDialog.hide(res.data);

                }

                $scope.close = function() {
                    $mdDialog.hide(false);
                }
            }
        }).then(data => {

            data === true ? $scope.cotizacion = {} : alertas.mostrarToastEstandar("puedes seguir editando");

        });
    }

    $scope.agregar = function(producto){

        $scope.cotizacion.bolsa.push({id: producto.id, nombre: producto.nombre});
        $scope.$digest();

    }

    $scope.eliminar = function(idx){

        $scope.cotizacion.bolsa.splice(idx, 1);
    }


});
