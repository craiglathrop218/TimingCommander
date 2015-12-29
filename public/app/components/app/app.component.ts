import {Component} from "angular2/core";
import {VCFiveComponent} from "../../devices/vc-five/components/vc-five.component";
import {HeroList} from "../../devices/hero-sample/components/hero-list.component";
import {TCPersonalityDebuggerComponent} from "../tcframework/components/tc-personality-debugger.component";
import {TCPersonalityService} from "../tcframework/services/tc-personality.service";
import {DemoWiz1Service} from "../../devices/demowiz1/services/demowiz1.service";
import {provide} from "angular2/core";
import {DemoWiz2Service} from "../../devices/demowiz2/services/demowiz2.service";

@Component({
    selector: "my-app",
    templateUrl: "app/components/app/app.component.html",
    directives: [VCFiveComponent, HeroList, TCPersonalityDebuggerComponent],
    providers: [provide(TCPersonalityService, {useClass:DemoWiz1Service})]
})

export class AppComponent {
}
