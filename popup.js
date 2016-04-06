
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, tabService){
    tabService.open();
});
