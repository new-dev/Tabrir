(function() {
    var blahComponent = ng.core.Component({
        selector: 'blah-app',
        template: '<div>hello</div>'
    }).Class({
        constructor: function() {}
    });

    document.addEventListener("DOMContentLoaded", function() {
        ng.platform.browser.bootstrap(blahComponent);
    });

}());