'use strict';

angular.module('app').controller('viewManagerCtrl', function($scope, groupFactory) {
    var currentView = "default";

    $scope.switchToCreateView = () => currentView = "create";
    $scope.switchToDefaultView = () => currentView = "default";
    $scope.showDefaultView = () => currentView === "default";
    $scope.showCreateView = () => currentView === "create";
    var init = () => groupFactory.groups();

    init();
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('manageview', function(groupFactory) {
    //groupFactory.groups();
    return { scope: false, templateUrl: '../../views/templates/manage-views.html' }
});