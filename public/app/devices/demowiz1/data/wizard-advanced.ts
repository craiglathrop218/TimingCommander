import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";
export class WizardAdvanced extends WizardScreen {
    constructor() { super("WizardAdvanced"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    validateWizardScreen(wizardName:string):WizardValidationInfo { return null; }


    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label3", 5, 5, 75, 25, "Advanced1:"),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardAdvanced1", "textBox2", 90, 5, 150, 25),
        new WizardDiagramElement(ElementTypes.Label, "label3", 5, 40, 75, 25, "Advanced2:"),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardAdvanced2", "textBox6", 90, 40, 150, 25)
    ];
}