/**
 * Created by ajt on 4/6/2016.
 */
angular.module('app').controller('viewManagerCtrl', function($scope) {
    var currentView = "default";
    $scope.switchToCreateView = function switchToCreateView() {
        currentView = "create";
    };
    $scope.switchToDefaultView = function switchToDefaultView() {
        currentView = "default";
    };
    $scope.showDefaultView = function showDefaultView() {
        return currentView === "default";
    };
    $scope.showCreateView = function showCreateView() {
        return currentView === "create";
    }
});

//eventually we can break each part into its own directive as well
angular.module('app').directive('manageview', function() {
    return { scope: false, templateUrl: '../../views/templates/manage-views.html' }
});