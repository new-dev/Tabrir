
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, groupFactory, iconService){

    $scope.createGroup = function() {
        groupFactory.create();
    };

    $scope.open = function() {
        groupFactory.open("test1");
    };

    $scope.getIcon = function(url) {
        $scope.icon = iconService.getFavicon(url);
        console.log($scope.icon);
    }
});
