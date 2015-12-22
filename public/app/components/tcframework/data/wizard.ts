import {Injectable} from "angular2/core";
import {WizardSection} from "./wizard-section";
@Injectable()
export abstract class Wizard {
    public name: string;
    public width: number;

    constructor(_name:string, _width:number) {
        this.name = _name;
        this.width = _width;
    }
    abstract getSections() : WizardSection[];
}