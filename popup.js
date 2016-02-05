//This is a self invoking function. if you notice at the end of the "function" there is "()"

(function() {
    var blahComponent = ng.core.Component({
        selector: 'blah-app',
        templateUrl: 'open-tabs.html'
    }).Class({
        constructor: function() {}
    });

    document.addEventListener("DOMContentLoaded", function() {
        ng.platform.browser.bootstrap(blahComponent);
    });

}());