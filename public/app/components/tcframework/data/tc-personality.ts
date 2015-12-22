import {WizardScreen} from "../data/wizard-screen";
import {Wizard} from "../data/wizard";
import {DataMetadata} from "../data/data-metadata";
import {Data} from "../data/data";

export abstract class TCPersonality {
    constructor(protected _name: string) { }

    abstract getWizardScreens() : WizardScreen[];
    abstract getStartupWizard() : Wizard;
    abstract getWizards() : Wizard[];
    abstract getDataFields() : DataMetadata[];

    get name() : string { return this._name; }

    _wizards : Wizard[];
    _wizardScreens : WizardScreen[];
    _startupWizard : Wizard;
    _dataFields : DataMetadata[];
    _data : Data[];

    get wizards() : Wizard[] {
        if (this._wizards == null) this._wizards = this.getWizards();
        return this._wizards;
    }

    get wizardScreens() : WizardScreen[] {
        if (this._wizardScreens == null) this._wizardScreens = this.getWizardScreens();
        return this._wizardScreens;
    }

    get startupWizard() : Wizard {
        if (this._startupWizard == null) this._startupWizard = this.getStartupWizard();
        return this._startupWizard;
    }

    get dataFields() : DataMetadata[] {
        if (this._dataFields == null) this._dataFields = this.getDataFields();
        return this._dataFields;
    }

    get data() : Data[] {
        if (this._data == null) this._data = this.createData();
        return this._data;
    }

    getData(fieldName:string) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].metadata.name == fieldName) return this.data[i];
        }
        return null;
    }

    createData() : Data[] {
        var res :Data[] = [];

        // This returns strings, not objects.
        //for (var meta in this.dataFields) {
        for (var i = 0; i < this.dataFields.length; i++) {
            var meta = this.dataFields[i];
            res.push(new Data(meta));
        }
        return res;
    }

}