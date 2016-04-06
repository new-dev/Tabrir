angular.module('app')
    .service('tabsService', [
        function() {
            this.open = function() {
                var urlList = [];

                urlList.push("https://google.com");
                urlList.push("https://angular.io/");

                urlList.map(url => chrome.tabs.create({url: url}));
            }
        }
    ]);