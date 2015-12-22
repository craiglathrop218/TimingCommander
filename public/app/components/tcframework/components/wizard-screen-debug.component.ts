import {Component} from "angular2/core";
import {WizardScreen} from "../data/wizard-screen";

@Component({
    selector: 'wizard-screen-debug',
    templateUrl: "app/components/tcframework/components/wizard-screen-debug.component.html",
    inputs: ['wizardScreen']
})
export class WizardScreenDebugComponent {
    public wizardScreen:WizardScreen;
}

