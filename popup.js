
var app = angular.module('app', []);

app.controller('appCtrl', function($scope){

    var urlList = [];

    urlList.push("https://google.com");
    urlList.push("https://angular.io/");

    urlList.map(url => chrome.tabs.create({url: url}));
});
