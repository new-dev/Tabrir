
var app = angular.module('app', []);

app.controller('appCtrl', function($scope, tabService, groupFactory){

    //Uncomment the below two lines to test open url's
    //var urlList = ["https://google.com", "https://angular.io/"];
    //tabService.openUrls(urlList);

    $scope.createGroup = function() {
        groupFactory.newGroup();
    };

    $scope.openGroup = function() {
        groupFactory.openGroup("test1");
    };
});
