import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";

export class WizardPath3 extends WizardScreen {
    constructor() { super("WizardPath3"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label6", 5, 5, 200, 20),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardField3", "textBox5", 215, 5, 300, 20),
    ];
}