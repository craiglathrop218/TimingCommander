import {DataMetadata} from "./data-metadata";
export class Data {
    public metadata : DataMetadata;
    public value;
    constructor(_metadata:DataMetadata) {
        this.metadata = _metadata;
    }
    tostring() {
        return this.metadata.name + "=" + (this.value == null ? "unassigned" : this.value);
    }
}