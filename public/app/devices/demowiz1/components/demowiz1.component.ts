import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {TCPersonality} from "../../../components/tcframework/data/tc-personality";
import {DemoWiz1Personality} from "../data/demowiz1-personality";
import {TCPersonalityDisplayerComponent} from "../../../components/tcframework/components/tc-personality-displayer.component";
import {WizardDisplayerComponent} from "../../../components/tcframework/components/wizard-displayer.component";
@Component({
    selector: "demowiz1",
    templateUrl: "app/devices/demowiz1/components/demowiz1.component.html",
    directives: [WizardDisplayerComponent]
})
export class DemoWiz1Component extends TCPersonalityDisplayerComponent implements OnInit {
    constructor() { super(new DemoWiz1Personality()); }
    ngOnInit() {
        this.handleOnInit();
    }
}