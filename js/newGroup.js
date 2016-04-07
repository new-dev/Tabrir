/**
 * Created by ajt on 4/6/2016.
 */
angular.module('app').controller('newGroupCtrl', function($scope, groupFactory, iconService) {

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