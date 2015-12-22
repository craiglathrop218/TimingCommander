import {TCPersonalityService} from "../../../components/tcframework/services/tc-personality.service";
import {Injectable} from "angular2/core";
import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {Wizard} from "../../../components/tcframework/data/wizard";
import {StartupWizard} from "../data/startup-wizard";
import {AdvancedWizard} from "../data/advanced-wizard";
import {WizardMain} from "../data/wizard-main";
import {WizardPath1} from "../data/wizard-path1";
import {WizardAdvanced} from "../data/wizard-advanced";
import {WizardAdvanced2} from "../data/wizard-advanced2";

@Injectable()
export class DemoWiz1Service extends TCPersonalityService {
    constructor() {
        super("DemoWiz1");
    }

    public name4 : string = "sarah";
    getWizardScreens():WizardScreen[] {
        return this.wizardScreens;
    }

    getStartupWizard(): Wizard {
        return this._startupWizard;
    }

    private _startupWizard : Wizard = new StartupWizard();

    getWizards() : Wizard[] {
        return [
            this._startupWizard,
            new AdvancedWizard()
        ];
    }

    private wizardScreens : WizardScreen[] = [
        new WizardMain(),
        new WizardPath1(),
        new WizardAdvanced(),
        new WizardAdvanced2()
    ]
}