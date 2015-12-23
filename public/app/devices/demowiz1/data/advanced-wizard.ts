import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
export class AdvancedWizard extends Wizard {
    constructor() {super("DemoWiz1 Advanced Wizard", 600, 300); }

    getSections(): WizardSection[] {
        return [
          new WizardSection("Advanced", "INCOMPLETE", "WizardAdvanced"),
          new WizardSection("Advanced2", "INCOMPLETE", "WizardAdvanced2")
        ]
    }
}