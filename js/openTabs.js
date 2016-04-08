'use strict';

angular.module('app').controller('openTabsCtrl', function($scope, groupFactory, iconService) {
    $scope.open = (urlList) => groupFactory.open(urlList);
    $scope.groupsExist = () => groupFactory.groupsExist();
    //$scope.getIcon = (url) => iconService.favicon(url);
    $scope.getIcon = (url) => {
        console.log(url);
        //return "http://www.google.com/s2/favicons?domain=www.google.com";
        $scope.icon = iconService.favicon(url);
    };
    $scope.groups = groupFactory.groupData;
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('opentabs', function() {
    return { scope: false, templateUrl: '../../views/templates/open-tabs.html' }
});