'use strict';

angular.module('app').controller('openTabsCtrl', function($scope, groupFactory, iconService) {
    $scope.open = (urlList) => groupFactory.open(urlList);
    $scope.groupsExist = () => groupFactory.groupsExist();
    $scope.getIcon = (url) => $scope.icon = iconService.favicon(url);
    $scope.groups = groupFactory.groups;
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('opentabs', function() {
    return { scope: false, templateUrl: '../../views/templates/open-tabs.html' }
});