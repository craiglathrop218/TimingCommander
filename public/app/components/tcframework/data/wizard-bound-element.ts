import {WizardElement} from "./wizard-element";
import {DataMetadata} from "./data-metadata";
import {ElementTypes} from "./element-types";
import {TCPersonality} from "./tc-personality";
import {Data} from "./data";
export abstract class WizardBoundElement extends WizardElement {
    constructor(
        public boundFieldName:string,
        _elementType : ElementTypes,
        _name:string,
        _x:number,
        _y:number,
        _width:number,
        _height:number) {
        super(_name, _elementType, _x, _y, _width, _height, "")
    }

    tostring(includeType:Boolean=true) { return super.tostring(includeType) + " {{" + this.boundFieldName + "}}"; }

    public data : Data;
    bind(personality:TCPersonality) {
        this.data = personality.getData(this.boundFieldName);
    }
}