'use strict';

angular.module('app').controller('newGroupCtrl', function($scope, groupFactory, iconService) {
    $scope.tempUrls = ["http://www.google.com"];
    $scope.groupName;

    $scope.addUrlBox = () => $scope.tempUrls.push("");
    $scope.removeUrl = (index) => $scope.tempUrls.splice(index, 1);
    $scope.createGroup = () => groupFactory.create($scope.groupName, $scope.tempUrls);
    $scope.getIcon = (url) => iconService.favicon(url);
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('newgroup', function() {
    return { scope: false, templateUrl: '../../views/templates/new-group.html' }
});