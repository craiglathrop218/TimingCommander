import {DataTypes} from "./data-types";
import {DataOption} from "./data-option";
export class DataMetadata {
    constructor(public name:string, public type:DataTypes, public options:DataOption[], public limits, public defaultValue) {}
    public toString() { return this.name + "[" + DataTypes[this.type] + "]"; }
}