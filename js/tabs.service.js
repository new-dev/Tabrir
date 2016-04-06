angular.module('app').service('tabService', function() {

    this.openUrls = function(urlList) {
        urlList.map(url => chrome.tabs.create({url: url}));
    }

});