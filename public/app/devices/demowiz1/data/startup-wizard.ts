import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
export class StartupWizard extends Wizard {
    constructor() {super("DemoWiz1 Startup Wizard", 500); }

    getSections(): WizardSection[] {
        return [
          { "header": "Main", "status": "INCOMPLETE", "wizardScreen": "WizardMain" },
          { "header": "Path1", "status": "INCOMPLETE", "wizardScreen": "WizardPath1" },
          { "header": "Advanced", "status": "OPTIONAL", "wizardScreen": "WizardAdvanced" }
        ]
    }

}