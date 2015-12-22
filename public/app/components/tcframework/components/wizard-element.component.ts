import {IWizardElement} from "../interfaces/iwizard-element";
import {Component} from "angular2/core";
@Component({
    inputs: ['wizardElement']
})
export class WizardElementComponent {
    public wizardElement : IWizardElement;
}