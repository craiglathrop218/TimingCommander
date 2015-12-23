import {IWizardElement} from "../interfaces/iwizard-element";
import {ElementTypes} from "./element-types";
import {TCPersonality} from "./tc-personality";
export abstract class WizardElement implements IWizardElement {
    constructor(
        public name:string,
        public elementType:ElementTypes,
        public x:number,
        public y:number,
        public width:number,
        public height:number) {}

    get xpx() { return this.x + "px"; }
    get ypx() { return this.y + "px"; }
    get widthpx() { return this.width + "px"; }
    get heightpx() { return this.height + "px"; }

    tostring(includeType:Boolean = true) {
        return this.name + ":" + (includeType ? ElementTypes[this.elementType] : "") + " @ (" + this.x + "," + this.y + "), " + this.width + " x " + this.height;
    }

    bind(personality:TCPersonality) {}
}