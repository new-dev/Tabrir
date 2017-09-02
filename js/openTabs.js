'use strict';

angular.module('app').controller('openTabsCtrl', function($scope, groupFactory, iconService) {
    $scope.iconService = iconService;
    $scope.groupFactory = groupFactory;
    $scope.deleteGroup = (index) => groupFactory.erase(index);
    $scope.groups = () => {
        groupFactory.groups();
        return $scope.groupFactory.groupData;
    };
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('opentabs', function() {
    return { scope: false, templateUrl: '../../views/templates/open-tabs.html' }
});
