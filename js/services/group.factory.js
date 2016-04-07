angular.module('app').factory('groupFactory', function($q) {
    var groupFactory = {};

    groupFactory.newGroup = () => {
        var newGroupData = {
            // Using mock data here
            groupName: 'test1',
            urlList: ["https://google.com", "https://angular.io/"]
        };

        groupFactory.saveGroup(newGroupData);
    };

    groupFactory.saveGroup = (newGroupData) => {
        chrome.storage.sync.get(storedGroups => {
            if(typeof(storedGroups.data) !== 'undefined' && storedGroups.data instanceof Array) {
                storedGroups.data.unshift(newGroupData);
            } else {
                storedGroups.data = [newGroupData];
            }
            chrome.storage.sync.set(storedGroups, () => {
                if (chrome.runtime.error) {
                    console.log("RuntimeError.");
                }
            });
            window.close();
        });
    };

    groupFactory.loadGroups = () => {
        var deferred = $q.defer();
        chrome.storage.sync.get(storedGroups => {
            if (!chrome.runtime.error) {
                deferred.resolve(storedGroups.data);
            }
        });
        return deferred.promise;
    };

    groupFactory.openGroup = (query) => {
        var allGroups;
        groupFactory.loadGroups().then(data => {
            allGroups = data;
            var selectedGroup = groupFactory.filter(allGroups, query);
            selectedGroup[0].urlList.map(url => chrome.tabs.create({url: url}));
        });
    };

    groupFactory.filter = (groups, query) => groups.filter(el => el.groupName === query);

    groupFactory.editGroup = () => {

    };

    groupFactory.deleteGroup = () => {

    };

    return groupFactory;
});