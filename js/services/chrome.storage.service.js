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

    this.erase = (index) => {
        chrome.storage.sync.get(storedGroups => {
            console.log("deleting");
            storedGroups.cloudKey.splice(index, 1);
            chrome.storage.sync.set(storedGroups, () => {
                if (chrome.runtime.error) {
                    console.log("RuntimeError.");
                }
            });
        });
    };

    this.load = (deferred) => {
        chrome.storage.sync.get(storedGroups => {
            if (!chrome.runtime.error) {
                deferred.resolve(storedGroups.cloudKey);
            }
        });
    };

    this.update = (updatedGroupData, index) => {
        chrome.storage.syn.get(storedGroups => {
            console.log("updating");
            storedGroups.cloudKey.splice(index, 1, updatedGroupData);
            chrome.storage.sync.set(storedGroups, () => {
                if (chrome.runtime.error) {
                    console.log("RuntimeError.");
                }
            });
        });
    };

    this.setViewState = () => {
        chrome.storage.local.set({'viewState': 'create'}, () => {
            if (chrome.runtime.error) {
                console.log("RuntimeError.");
            }
        });
    };

    this.getViewState = () => chrome.storage.local.get('viewState', (state) => state);
    this.clearViewState = () => chrome.storage.local.erase('viewState');
});
