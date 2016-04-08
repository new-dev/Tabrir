'use strict';

angular.module('app').service('chromeStorageService', function() {

    this.save = (newGroupData) => {
        chrome.storage.sync.get(storedGroups => {
            if(typeof(storedGroups.cloudKey.data) !== 'undefined' && storedGroups.cloudKey.data instanceof Array) {
                storedGroups.cloudKey.data.unshift(newGroupData);
            } else {
                storedGroups.cloudKey.data = [newGroupData];
            }
            chrome.storage.sync.set({cloudKey: storedGroups}, () => {
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
                deferred.resolve(storedGroups.cloudKey.data);
            }
        });
    };

});