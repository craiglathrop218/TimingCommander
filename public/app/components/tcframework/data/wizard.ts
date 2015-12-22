import {Injectable} from "angular2/core";
import {WizardSection} from "./wizard-section";
@Injectable()
export abstract class Wizard {
    public name: string;
    public width: number;

    private _sections : WizardSection[];

    get sections() : WizardSection[] {
        if (this._sections == null) this._sections = this.getSections();
        return this._sections;
    }

    constructor(_name:string, _width:number) {
        this.name = _name;
        this.width = _width;
    }
    abstract getSections() : WizardSection[];

    tostring() { return this.name + " (width: " + this.width + ")"; }
}