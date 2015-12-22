import {Injectable} from 'angular2/core';
import {WizardScreen} from "../data/wizard-screen";
import {Wizard} from "../data/wizard";

@Injectable()
export abstract class TCPersonalityService {
    constructor(protected _name: string) {
        this.name3 = "cater";
    }

    get name() : string {
        console.log("retrieving name");
        return this._name + "!";
    }
    get name2() : string {
        console.log("retrieving name2");
        return "david";
    }

    public name3 : string;
    public wizardCount : number = 3;
    get wizards() : Wizard[] {
        console.log("wizards()");
        console.log(this.getWizards());
        return this.getWizards();
    }
    get startupWizard() : Wizard { return this.getStartupWizard(); }

    abstract getWizardScreens() : WizardScreen[];
    abstract getStartupWizard() : Wizard;
    abstract getWizards() : Wizard[];
}
