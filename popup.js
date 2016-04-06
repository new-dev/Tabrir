
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, tabService){

    var urlList = ["https://google.com", "https://angular.io/"];
    tabService.openUrls(urlList);

});
