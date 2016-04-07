/**
 * Created by ajt on 4/6/2016.
 */
angular.module('app').controller('newGroupCtrl', function($scope, groupFactory, iconService) {
    $scope.tempUrls = ["www.google.com"];

    $scope.addUrlBox = function addUrlBox() {
        $scope.tempUrls.push("");
    };
    $scope.removeUrl = function removeUrl(index) {
        $scope.tempUrls.splice(index, 1);
    };

    $scope.createGroup = function() {
        groupFactory.create();
    };
    $scope.getIcon = function(url) {
        $scope.icon = iconService.favicon(url);
    }

});

//eventually we can break each part into its own directive as well
angular.module('app').directive('newgroup', function() {
    return { scope: false, templateUrl: '../../views/templates/new-group.html' }
});