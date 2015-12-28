import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";
export class StartupWizard extends Wizard {
    constructor() {super("DemoWiz1 Startup Wizard", 650, 150); }


    getSections(): WizardSection[] {
        var res : WizardSection[] = [];
        res.push(new WizardSection("Main", "INCOMPLETE", "WizardMain", 0));
        res.push(new WizardSection("Advanced", "OPTIONAL", "WizardAdvanced", 2));
        var path = this._personality.getData("WizardPath").value;
        res.push(new WizardSection(path, "INCOMPLETE", `Wizard${path}`, 1));
        return res;
    }

    isWizardReadyToFinish():boolean {
        return this.currentWizardFieldValue > 0;
    }

    get currentWizardFieldValue() : number {
        return this._personality.getData(this.currentWizardFieldName).value;
    }

    get currentWizardFieldName() : string {
        var path = this._personality.getData("WizardPath").value;
        return `WizardField${path.substring(path.length - 1)}`;
    }

    validateWizard():WizardValidationInfo {
        if (this.currentWizardFieldValue < 10)
            return new WizardValidationInfo(`${this.currentWizardFieldName} must be >= 10.`)
        return null;
    }
}
