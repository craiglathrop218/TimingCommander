import {WizardBoundElement} from "./wizard-bound-element";
import {ElementTypes} from "./element-types";
import {DataMetadata} from "./data-metadata";
import {EditableUserInterfaces} from "./Editable-user-interfaces";
export class WizardEditableBoundElement extends WizardBoundElement {
    constructor(public userInterface:EditableUserInterfaces,
                _boundFieldName:string,
                _name:string,
                _x:number,
                _y:number,
                _width:number,
                _height:number) {
        super(_boundFieldName, ElementTypes.EditableBoundElement, _name, _x, _y, _width, _height)
    }

    public toString() { return super.toStringCustom(false) + ". UI: " + EditableUserInterfaces[this.userInterface]; }
}