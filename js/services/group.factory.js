'use strict';

angular.module('app').factory('groupFactory', function($q, chromeStorageService) {
    var groupFactory = {};

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

    groupFactory.open = (query) => {
        groupFactory.load().then(data =>
            groupFactory.filter(data, query)[0].urlList.map(url => chrome.tabs.create({url:url})));
    };

    groupFactory.groupsExist = () => groupFactory.load().then(data => data != null);
    groupFactory.save = (newGroupData) => chromeStorageService.save(newGroupData);
    groupFactory.filter = (groups, query) => groups.filter(el => el.groupName === query);
    groupFactory.edit = () => {};
    groupFactory.erase = () => {};

    return groupFactory;
});