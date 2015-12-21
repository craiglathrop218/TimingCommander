import {Component} from "angular2/core";
import {VCFiveComponent} from "../../devices/vc-five/components/vc-five.component";

@Component({
    selector: "my-app",
    templateUrl: "app/components/app/app.component.html",
    directives: [VCFiveComponent]
})

export class AppComponent{


}

