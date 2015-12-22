import {DataTypes} from "./data-types";
export class DataMetadata {
    public name : string;
    public options : any[];
    public limits;
    public type : DataTypes;

    constructor(_name:string, _type:DataTypes, _options:any[], _limits) {
        this.name = _name;
        this.options = _options;
        this.limits = _limits;
        this.type = _type;
        console.log("DataMetadata constructor. _name: " + _name + ", name: " + this.name);
    }

    tostring() { return this.name + "[" + DataTypes[this.type] + "]"; }
}