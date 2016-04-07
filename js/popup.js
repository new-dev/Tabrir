
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, groupFactory, iconService){

    $scope.createGroup = function() {
        groupFactory.create();
    };

    $scope.open = function() {
        groupFactory.open("test2");
    };

    $scope.getIcon = function(url) {
        $scope.icon = iconService.favicon(url);
    }
});
