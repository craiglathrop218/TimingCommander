import {DataMetadata} from "../data/data-metadata";
export interface IDataChangeListener {
    dataChanged(oldValue, newValue, metadata: DataMetadata): void;
}