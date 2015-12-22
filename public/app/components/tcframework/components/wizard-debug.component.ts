import {Component} from "angular2/core";
import {Wizard} from "../data/wizard";

@Component({
    selector: 'wizard-debug',
    templateUrl: "app/components/tcframework/components/wizard-debug.component.html",
    inputs: ['wizard']
})
export class WizardDebugComponent {
    public wizard:Wizard;
}

