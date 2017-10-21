var app = angular.module('myapp');

app.controller('productosCtrl', function($scope, Producto) {

    Producto.categorias().then(res => {
        $scope.categorias = res.data
        $scope.$digest();
    })

});
