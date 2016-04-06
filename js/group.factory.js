angular.module('app').factory('groupFactory', function() {
    var groupFactory = {};

    groupFactory.newGroup = function() {
        this.newGroupData = {
            // Using mock data here
            groupName: 'groupName',
            urlList: ["https://google.com", "https://angular.io/"]
        }
    };

    groupFactory.saveGroup = function() {

    };

    groupFactory.editGroup = function() {

    };

    groupFactory.deleteGroup = function() {

    };

    return groupFactory;
});