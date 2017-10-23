var app = angular.module('myapp');

app.controller('catalogosCtrl', function($scope, Catalogo) {

    Catalogo.obtener().then(res =>{

        $scope.catalogos = res.data;
        $scope.$digest();

        console.log(res.data);

    })

});
