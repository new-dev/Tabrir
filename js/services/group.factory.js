angular.module('app').factory('groupFactory', function($q) {
    var groupFactory = {};

    groupFactory.create = () => {
        var newGroupData = {
            // Using mock data here
            groupName: 'test1',
            urlList: ["https://google.com", "https://angular.io/"]
        };

        groupFactory.save(newGroupData);
    };

    groupFactory.save = (newGroupData) => {
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

    groupFactory.load = () => {
        var deferred = $q.defer();
        chrome.storage.sync.get(storedGroups => {
            if (!chrome.runtime.error) {
                deferred.resolve(storedGroups.data);
            }
        });
        return deferred.promise;
    };

    groupFactory.open = (query) => {
        var allGroups;
        groupFactory.load().then(data => {
            allGroups = data;
            var selectedGroup = groupFactory.filter(allGroups, query);
            selectedGroup[0].urlList.map(url => chrome.tabs.create({url: url}));
        });
    };

    groupFactory.filter = (groups, query) => groups.filter(el => el.groupName === query);

    groupFactory.edit = () => {

    };

    groupFactory.erase = () => {

    };

    return groupFactory;
});