import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
export class WizardAdvanced extends WizardScreen {
    constructor() { super("WizardAdvanced"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label3", 0, 0, 80, 20),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardAdvanced1", "textbox2", 90, 0, 80, 20)
    ];
}