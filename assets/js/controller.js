app.controller('Ctrl', function ($scope, $rootScope, $http, mdDialog, AuthService, $localStorage, $mdPanel) {

    $scope.iniciosesion = function (ev) {
        mdDialog.mostrardialog('login', $scope.customFullscreen, ev);
    };

    $scope.logOut = function(){
        AuthService.logout();
    }

    $scope.showPanel = function($event) {
    $mdPanel.open('Panel', {
        id: 'esto es un menu',
        position:
            $mdPanel
            .newPanelPosition()
            .relativeTo($event.srcElement)
            .addPanelPosition($mdPanel.xPosition.ALIGN_END, $mdPanel.yPosition.BELOW),
        locals: {
            items: ['Account', 'Sign Out']
        },
        openFrom: $event
    });
    }

});
