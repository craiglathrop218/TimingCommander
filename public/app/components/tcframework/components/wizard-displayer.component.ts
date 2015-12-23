import {Component} from "angular2/core";
import {Wizard} from "../data/wizard";
@Component({
    selector: "wizard-displayer",
    templateUrl: "app/components/tcframework/components/wizard-displayer.component.html",
    inputs: ['wizard']
})
export class WizardDisplayerComponent {
    public wizard:Wizard;
}