import {Component} from 'angular2/core';
import {TCPersonalityService} from "../services/tc-personality.service";
import {provide} from "angular2/core";
import {Wizard} from "../data/wizard";

@Component({
    selector: "tc-personality",
    templateUrl: "app/components/tcframework/components/tc-personality-displayer.component.html",
    directives: [TCPersonalityService]
})
export class TCPersonalityDisplayerComponent {

    // This is going to have an instance of TCPersonalityService injected.
    constructor(private _tcpersonality : TCPersonalityService) {}

    get name(): string {
        return this._tcpersonality.name;
    }
}