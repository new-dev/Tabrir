import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'app',
    template: '<div>Hi</div>'
});

class App{}

bootstrap(App);