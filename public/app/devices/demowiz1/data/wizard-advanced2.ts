import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";
export class WizardAdvanced2 extends WizardScreen {
    constructor() { super("WizardAdvanced2"); }
    getElements():WizardElement[] {
        return this._myelements;
    }

    validateWizardScreen(wizardName:string):WizardValidationInfo { return null; }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label4", 0, 0, 80, 20, "Advanced2:"),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardAdvanced2", "textBox3", 90, 0, 80, 20)
    ];
}