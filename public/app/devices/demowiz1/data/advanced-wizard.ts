import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
export class AdvancedWizard extends Wizard {
    constructor() {super("DemoWiz1 Advanced Wizard", 500); }

    getSections(): WizardSection[] {
        return [
          { "header": "Advanced", "status": "INCOMPLETE", "wizardScreen": "WizardAdvanced" },
          { "header": "Advanced2", "status": "INCOMPLETE", "wizardScreen": "WizardAdvanced2" }
        ]
    }

}