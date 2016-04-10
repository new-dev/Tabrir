'use strict';

angular.module('app').controller('openTabsCtrl', function($scope, groupFactory, iconService) {
    $scope.open = (urlList) => groupFactory.open(urlList);
    $scope.groupsExist = () => groupFactory.groupsExist();
    $scope.getIcon = (url) => iconService.favicon(url);
    $scope.groupFactory = groupFactory;
    $scope.groups = $scope.groupFactory.groupData;
    $scope.erase = (index) => groupFactory.erase(index);
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('opentabs', function() {
    return { scope: false, templateUrl: '../../views/templates/open-tabs.html' }
});