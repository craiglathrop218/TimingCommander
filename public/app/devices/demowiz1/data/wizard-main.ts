import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {WizardElement} from "../../../components/tcframework/data/wizard-element";
import {ElementTypes} from "../../../components/tcframework/data/element-types";
import {WizardDiagramElement} from "../../../components/tcframework/data/wizard-diagram-element";
import {WizardEditableBoundElement} from "../../../components/tcframework/data/wizard-editable-bound-element";
import {EditableUserInterfaces} from "../../../components/tcframework/data/editable-user-interfaces";
import {WizardValidationInfo} from "../../../components/tcframework/data/wizard-validation-info";

//TODO: I have this in components/tcframework/util/stringhelper.js.  What's the right way to handle
// global functions in TypeScript?
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

export class WizardMain extends WizardScreen {
    constructor() { super("WizardMain"); }

    getElements():WizardElement[] {
        return this._myelements;
    }

    validateWizardScreen(wizardName:string):WizardValidationInfo {
        if (isBlank(this.getData("WizardPath").value)) return { errorMessage: "WizardPath is required." };
        return null;
    }

    private _myelements : WizardElement[] = [
        new WizardDiagramElement(ElementTypes.Label, "label1", 5, 5, 60, 25, "Path:"),
        new WizardEditableBoundElement(EditableUserInterfaces.ComboBox, "WizardPath", "combobox1", 75, 5, 150, 25)
    ];
}