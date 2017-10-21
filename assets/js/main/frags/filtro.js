var app = angular.module('myapp');

app.controller('filtroCtrl', function($scope, $state, $stateParams, Producto) {

    console.log($stateParams.categoria)

    if($stateParams.categoria === null){
        $state.go('productos')
    }else{

        $scope.categoria = $stateParams.categoria;
        Producto.marcas().then(res => {$scope.marcas = res.data})
        Producto.colores().then(res => {$scope.colores = res.data})

        let peticion = {
            where: {
                IdCategoria : $scope.categoria.id
            }
        }

        filtro(peticion)
    }

    function filtro(peticion){

        Producto.filtro(peticion).then(res => {
            $scope.productos = res.data;
            $scope.$digest()
            console.log(res.data);
        })
    }

});
