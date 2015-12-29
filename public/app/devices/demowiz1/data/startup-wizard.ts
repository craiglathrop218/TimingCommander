import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";

//TODO: I have this in components/tcframework/util/stringhelper.js.  What's the right way to handle
// global functions in TypeScript?
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}


export class StartupWizard extends Wizard {
    constructor() {super("DemoWiz1 Startup Wizard", 650, 150); }


    getSections(): WizardSection[] {
        var res : WizardSection[] = [];
        var path = this._personality.getData("WizardPath").value;
        res.push(new WizardSection("Main", isBlank(path) ? "INCOMPLETE" : "DONE", "WizardMain", 0));
        res.push(new WizardSection("Advanced", "OPTIONAL", "WizardAdvanced", 2));
        if (!isBlank(path)) res.push(new WizardSection(path, this.currentPathStatus, `Wizard${path}`, 1));
        return res;
    }

    get currentPathStatus() : string {
        var val = this.currentWizardFieldValue;
        return (val == undefined || val <= 0)
            ? "INCOMPLETE"
            : ((val < 10) ? "ERROR" : "DONE");
    }

    get isCurrentPathValueFilledIn(): boolean {
        var val = this.currentWizardFieldValue;
        return val != undefined && val > 0;
    }

    isWizardReadyToFinish():boolean {
        return this.isCurrentPathValueFilledIn;
    }

    get currentWizardFieldValue() : number {
        var name = this.currentWizardFieldName;
        if (name == null) return undefined;
        return this._personality.getData(name).value;
    }

    get currentWizardFieldName() : string {
        var path = this._personality.getData("WizardPath").value;
        if (path == null) return null;
        return `WizardField${path.substring(path.length - 1)}`;
    }

    validateWizard():WizardValidationInfo {
        if (this.currentWizardFieldValue < 10)
            return new WizardValidationInfo(`${this.currentWizardFieldName} must be >= 10.`)
        return null;
    }
}
