angular.module('app').factory('groupFactory', function() {
    var groupFactory = {};

    groupFactory.newGroup = function() {
        var newGroupData = {
            // Using mock data here
            groupName: 'groupName',
            urlList: ["https://google.com", "https://angular.io/"]
        }

        groupFactory.saveGroup(newGroupData);
    };

    groupFactory.saveGroup = function(newGroupData) {
        chrome.storage.sync.get(function(storedGroups) {
            if(typeof(storedGroups.data) !== 'undefined' && storedGroups.data instanceof Array) {
                storedGroups.data.unshift(newGroupData);
            } else {
                storedGroups.data = [newGroupData];
            }
            chrome.storage.sync.set(storedGroups, function() {
                if (chrome.runtime.error) {
                    console.log("RuntimeError.");
                }
            });
            window.close();
        });
    };

    groupFactory.editGroup = function() {

    };

    groupFactory.deleteGroup = function() {

    };

    return groupFactory;
});