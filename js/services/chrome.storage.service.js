'use strict';

angular.module('app').service('chromeStorageService', function() {

    this.save = (newGroupData) => {
        chrome.storage.sync.get(storedGroups => {
            if(typeof(storedGroups.cloudKey) !== 'undefined' && storedGroups.cloudKey instanceof Array) {
                storedGroups.cloudKey.unshift(newGroupData);
                chrome.storage.sync.set(storedGroups, () => {
                    if (chrome.runtime.error) {
                        console.log("RuntimeError.");
                    }
                });
                window.close();
            } else {
                storedGroups = [newGroupData];
                chrome.storage.sync.set({'cloudKey': storedGroups}, () => {
                    if (chrome.runtime.error) {
                        console.log("RuntimeError.");
                    }
                });
                window.close();
            }

        });
    };

    this.load = (deferred) => {
        chrome.storage.sync.get(storedGroups => {
            if (!chrome.runtime.error) {
                deferred.resolve(storedGroups.cloudKey);
            }
        });
    };

});