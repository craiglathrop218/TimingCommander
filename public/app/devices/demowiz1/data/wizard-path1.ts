import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";

export class WizardPath1 extends WizardScreen {
    constructor() { super("WizardPath1"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label2", 5, 5, 200, 20),
        new WizardEditableBoundElement(EditableUserInterfaces.TextBox, "WizardField1", "textBox1", 215, 5, 300, 20),
        new WizardDiagramElement(ElementTypes.Capacitor, "cap1", 25, 50, 150, 50),
        new WizardDiagramElement(ElementTypes.Resistor, "res1", 185, 50, 150, 50),
    ];
}