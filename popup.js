(function() {

    var HelloWorldComponent = function() {};

    HelloWorldComponent.annotations = [
        new ng.core.Component({
            selector: 'hello-world',
            template: '<h1>Hello Angular2!</h1>'
        })
    ];

    var HelloFlentApi = ng.core.Component({
        selector: 'hello-fluent',
        template: '<h1>Hello {{name}}!</h1>' + '<input [(ngModel)]="name">',
    }).Class({
        constructor: function() {
            this.name = "Fluent API";
        }
    });

    var AppComponent = ng.core.Component({
        selector: 'company-app',
        template: '<hello-world></hello-world>' +
        '<hello-fluent></hello-fluent>',
        directives: [HelloWorldComponent, HelloFlentApi]
    }).Class({
        constructor: function() {}
    });

    document.addEventListener("DOMContentLoaded", function() {
        ng.platform.browser.bootstrap(AppComponent);
    });

}());