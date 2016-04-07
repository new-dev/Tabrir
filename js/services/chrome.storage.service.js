'use strict';

angular.module('app').service('chromeStorageService', function() {

    this.save = (newGroupData) => {
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

    this.load = (deferred) => {
        chrome.storage.sync.get(storedGroups => {
            if (!chrome.runtime.error) {
                deferred.resolve(storedGroups.data);
            }
        });
    };

});