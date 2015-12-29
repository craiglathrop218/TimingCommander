import {WizardScreen} from "../data/wizard-screen";
import {Wizard} from "../data/wizard";
import {DataMetadata} from "../data/data-metadata";
import {Data} from "../data/data";
import {IDataChangeListener} from "../interfaces/idata-change-listener";

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
        if (this._wizardScreens == null) {
            this._wizardScreens = this.getWizardScreens();
            for (var i = 0; i < this._wizardScreens.length; i++) {
                this._wizardScreens[i].bind(this);
            }
        }
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

    getData(fieldName:string) : Data {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].metadata.name == fieldName) return this.data[i];
        }
        return null;
    }

    getScreen(screenName:string): WizardScreen {
        for (var i = 0; i < this.wizardScreens.length; i++) {
            if (this.wizardScreens[i].name == screenName) return this.wizardScreens[i];
        }
        return null;

    }

    public getWizard(wizardName:string): Wizard {
        for (var i = 0; i < this.wizards.length; i++) {
            if (this.wizards[i].name == wizardName) return this.wizards[i];
        }
        return null;

    }

    createData() : Data[] {
        var res :Data[] = [];

        // This returns strings, not objects.
        //for (var meta in this.dataFields) {
        for (var i = 0; i < this.dataFields.length; i++) {
            var meta = this.dataFields[i];
            res.push(new Data(meta, this));
        }
        return res;
    }

    _listeners : IDataChangeListener[] = [];

    addDataChangeListener(listener: IDataChangeListener) {
        this._listeners.push(listener);
    }

    removeDataChangeListener(listener: IDataChangeListener) {
        var index: number = this._listeners.indexOf(listener, 0);
        if (index != -1) this._listeners.splice(index, 1);
    }

    dataChanged(oldValue, newValue, metadata: DataMetadata) {
        for (var i = 0; i < this._listeners.length; i++) {
            //console.log(`calling listener @ ${i} (${this._listeners[i]})`);
            this._listeners[i].dataChanged(oldValue, newValue, metadata);
        }
    }
}