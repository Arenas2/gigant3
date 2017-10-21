var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {


    $scope.valor = [
        {
            where: {
                id: 1
            }
        },
        {
            include : [
            {
                model : 'usuario',
                as : ' Usuario'
            }
        ]}
    ];

    $scope.convertir = function(){
        console.log('1')
        let valor = $scope.valor;

        let z = JSON.stringify(valor);

        $http.post('/data/prueba', z).then(function(data){
            $scope.back = data;
            console.log(data);
        })
    }



});
