import {Wizard} from "../../../components/tcframework/data/wizard";
import {WizardSection} from "../../../components/tcframework/data/wizard-section";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";
export class AdvancedWizard extends Wizard {

    constructor() {super("DemoWiz1 Advanced Wizard", 600, 220); }

    isWizardReadyToFinish():boolean {
        return true;
    }

    validateWizard():WizardValidationInfo {
        if (this._personality.getData("WizardAdvanced3").value == "error") return { errorMessage: "invalid value" };
        return null;
    }

    getSections(): WizardSection[] {
        return [
          new WizardSection("Advanced", "INCOMPLETE", "WizardAdvanced", 0),
          new WizardSection("Super Advanced", "INCOMPLETE", "WizardAdvanced2", 1)
        ]
    }
}