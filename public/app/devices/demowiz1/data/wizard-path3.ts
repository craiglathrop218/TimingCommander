import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";

export class WizardPath3 extends WizardScreen {
    constructor() { super("WizardPath3"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    validateWizardScreen(wizardName:string):WizardValidationInfo {
        if (this.getData("WizardField3").value <= 0) return { errorMessage: "WizardField3 must be > 0." };
        return null;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label6", 5, 5, 200, 20, "Field3"),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardField3", "textBox5", 215, 5, 300, 20),
    ];
}