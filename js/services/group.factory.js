'use strict';

angular.module('app').factory('groupFactory', function($q, chromeStorageService) {
    var groupFactory = {};
    groupFactory.groupData = '';

    groupFactory.create = (name, urls) => {
        var newGroupData = {
            groupName: name,
            urlList: urls
        };

        groupFactory.save(newGroupData);
    };

    groupFactory.load = () => {
        var deferred = $q.defer();
        chromeStorageService.load(deferred);
        return deferred.promise;
    };

    groupFactory.open = (urlList) => urlList.map(url => chrome.tabs.create({url:url}));
    groupFactory.groupsExist = () => groupFactory.load().then(data => data != null);
    groupFactory.groups = () => groupFactory.load().then(data => groupFactory.groupData = data);
    groupFactory.save = (newGroupData) => chromeStorageService.save(newGroupData);
    groupFactory.edit = () => {};
    groupFactory.erase = () => {};

    return groupFactory;
});