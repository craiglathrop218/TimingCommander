import {WizardElementComponent} from "./wizard-element.component";
import {Component} from "angular2/core";
import {Data} from "../data/data";

@Component({
    inputs: ['data']
})
export class WizardElementBoundComponent extends WizardElementComponent {
    public data:Data;
}