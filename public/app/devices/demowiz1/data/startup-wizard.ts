import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
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

}