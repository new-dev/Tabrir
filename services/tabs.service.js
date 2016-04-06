angular.module('app')
    .service('tabs.service', [
        function() {
            this.open = function() {
                var urlList = [];

                urlList.push("https://google.com");
                urlList.push("https://angular.io/");

                urlList.map(url => chrome.tabs.create({url: url}));
            }
        }
    ]);