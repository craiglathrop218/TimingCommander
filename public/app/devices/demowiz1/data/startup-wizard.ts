import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
export class StartupWizard extends Wizard {
    constructor() {super("DemoWiz1 Startup Wizard", 650, 150); }

    getSections(): WizardSection[] {
        return [
          new WizardSection("Main", "INCOMPLETE", "WizardMain", 0),
          new WizardSection("Advanced", "OPTIONAL", "WizardAdvanced", 2),
          new WizardSection("Path2", "INCOMPLETE", "WizardPath2", 1)
        ];
    }

}