import {WizardElement} from "./wizard-element";
import {TCPersonality} from "./tc-personality";
export abstract class WizardScreen {
    constructor(public name:string) {}

    abstract getElements() : WizardElement[];

    private _elements : WizardElement[];

    get elements() : WizardElement[] {
        if (null == this._elements) this._elements = this.getElements();
        return this._elements;
    }

    public toString() {
        return this.name;
    }

    private bound:Boolean = false;
    bind(personality:TCPersonality) {
        if (this.bound) return;
        this.bound = true;
        for (var i = 0; i < this.elements.length; i++) this.elements[i].bind(personality);
    }
}