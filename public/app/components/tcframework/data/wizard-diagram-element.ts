import {WizardElement} from "./wizard-element";
import {ElementTypes} from "./element-types";
export class WizardDiagramElement extends WizardElement {
    constructor(
        _elementType : ElementTypes,
        _name:string,
        _x:number,
        _y:number,
        _width:number,
        _height:number,
        _text:string) {
        super(_name, _elementType, _x, _y, _width, _height, _text)
    }
}