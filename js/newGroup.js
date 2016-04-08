'use strict';

angular.module('app').controller('newGroupCtrl', function($scope, groupFactory, iconService) {
    $scope.tempUrls = ["www.google.com"];

    $scope.addUrlBox = () => $scope.tempUrls.push("");
    $scope.removeUrl = (index) => $scope.tempUrls.splice(index, 1);
    $scope.createGroup = () => groupFactory.create(document.getElementById("group-name").value, $scope.tempUrls);
    $scope.getIcon = (url) => iconService.favicon(url);
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('newgroup', function() {
    return { scope: false, templateUrl: '../../views/templates/new-group.html' }
});