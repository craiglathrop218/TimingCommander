import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";

export class WizardPath2 extends WizardScreen {
    constructor() { super("WizardPath2"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    validateWizardScreen(wizardName:string):WizardValidationInfo {
        if (this.getData("WizardField2").value <= 0) return { errorMessage: "WizardField2 must be > 0." };
        return null;
    }


    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label5", 5, 5, 60, 25, "Field2"),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardField2", "textBox4", 75, 5, 150, 25),
    ];
}