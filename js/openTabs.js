/**
 * Created by ajt on 4/6/2016.
 */
angular.module('app').controller('openTabsCtrl', function($scope, groupFactory, iconService) {
    $scope.open = () => groupFactory.open("test2");
    $scope.getIcon = (url) => $scope.icon = iconService.favicon(url);
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('opentabs', function() {
    return { scope: false, templateUrl: '../../views/templates/open-tabs.html' }
});