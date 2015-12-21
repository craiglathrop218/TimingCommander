import {Component,View} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';
import {NgForm}    from 'angular2/common';
//import {OnInit} from "angular2/core"
import {VCFiveService} from "../services/vc-five.service";

@Component({
    selector: "vc-five",
    templateUrl: "app/devices/vc-five/components/vc-five.component.html",
    providers: [VCFiveService]
})
export class VCFiveComponent{
    public settings;

    submitted = false;

    public test = "";

    constructor(private _deviceService: VCFiveService) {
        this.getSettings()
    }

    onSubmit() {this.submitted = true;}

    getSettings(){
        this.settings = this._deviceService.getSettings();
        console.log(this.settings.configurationCount_options);
    }
}