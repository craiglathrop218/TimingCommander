import {DataMetadata} from "./data-metadata";
import {TCPersonality} from "./tc-personality";
export class Data {
    get value() {
        return this._value;
    }
    set value(val) {
        var oldValue = this._value;
        this._value = val;
        //console.log(`set_value for ${this.metadata.name}. new val: ${val}`);
        this.personality.dataChanged(oldValue, this._value, this.metadata);
    }

    private _value;

    // I don't want to take the personality here, but right now I'm not sure how to do
    // watch for any property of the data model to change.  So I'm having to implement
    // something myself.
    constructor(public metadata:DataMetadata, public personality: TCPersonality) {
        this.value = metadata.defaultValue;
    }
    public toString() {
        return this.metadata.name + "=" + (this.value == null ? "unassigned" : this.value);
    }
}