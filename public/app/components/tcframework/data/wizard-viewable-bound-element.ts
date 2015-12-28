import {WizardBoundElement} from "./wizard-bound-element";
import {ElementTypes} from "./element-types";
import {DataMetadata} from "./data-metadata";
import {ViewableUserInterfaces} from "./viewable-user-interfaces";
export class WizardViewableBoundElement extends WizardBoundElement {
    constructor(public userInterface:ViewableUserInterfaces,
                _boundFieldName:string,
                _name:string,
                _x:number,
                _y:number,
                _width:number,
                _height:number) {
        super(_boundFieldName, ElementTypes.ViewableBoundElement, _name, _x, _y, _width, _height)
    }
    public toString() { return super.toStringCustom(false) + ". UI: " + ViewableUserInterfaces[this.userInterface]; }
}