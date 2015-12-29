import {WizardElement} from "./wizard-element";
import {TCPersonality} from "./tc-personality";
import {WizardValidationInfo} from "./wizard-validation-info";
import {Data} from "./data";
export abstract class WizardScreen {
    private _personality: TCPersonality;

    constructor(public name:string) {}

    /* ----------- Abstract Wizard Functions ----------- */
    abstract getElements() : WizardElement[];
    abstract validateWizardScreen(wizardName:string): WizardValidationInfo;
    /* ------------------------------------------------- */

    private _elements : WizardElement[];

    get elements() : WizardElement[] {
        if (null == this._elements) this._elements = this.getElements();
        return this._elements;
    }

    public toString() {
        return this.name;
    }

    bind(personality:TCPersonality) {
        if (this._personality != undefined) return;
        this._personality = personality;
        for (var i = 0; i < this.elements.length; i++) this.elements[i].bind(personality);
    }

    protected getData(fieldName: string) : Data {
        if (this._personality == undefined) return null;
        return this._personality.getData(fieldName);
    }
}