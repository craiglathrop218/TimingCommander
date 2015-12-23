import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
export class WizardMain extends WizardScreen {
    constructor() { super("WizardMain"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label1", 5, 5, 60, 25, "Path:"),
        new WizardEditableBoundElement(EditableUserInterfaces.ComboBox, "WizardPath", "combobox1", 75, 5, 150, 25)
    ];
}