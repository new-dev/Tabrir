angular.module('app').factory('groupFactory', function($q, chromeStorageService) {
    var groupFactory = {};

    groupFactory.create = () => {
        var newGroupData = {
            // Using mock data here
            groupName: 'test2',
            urlList: ["https://google.com", "https://angular.io/"]
        };

        groupFactory.save(newGroupData);
    };

    groupFactory.save = (newGroupData) => chromeStorageService.save(newGroupData);

    groupFactory.load = () => {
        var deferred = $q.defer();
        chromeStorageService.load(deferred);
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