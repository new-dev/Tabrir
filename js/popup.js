
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, groupFactory){

    $scope.createGroup = function() {
        groupFactory.newGroup();
    };

    $scope.openGroup = function() {
        groupFactory.openGroup("test1");
    };
});
