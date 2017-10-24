var app = angular.module('myapp');

app.controller('cotizacionesCtrl', function($scope, Cotizacion) {

    Cotizacion.obtener().then(res => {
        $scope.cotizaciones = res.data;
        $scope.$digest();
    })

});
