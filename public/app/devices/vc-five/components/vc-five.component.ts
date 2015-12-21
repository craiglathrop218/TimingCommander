import {Component} from "angular2/core";
//import {OnInit} from "angular2/core"
import {VCFiveService} from "../services/vc-five.service";

@Component({
    selector: "vc-five",
    templateUrl: "app/devices/vc-five/components/vc-five.component.html",
    providers: [VCFiveService]
})
export class VCFiveComponent{
    public settings;

    constructor(private _deviceService: VCFiveService) {
        this.getSettings()
    }

    getSettings(){
        this.settings = this._deviceService.getSettings();
        console.log(this.settings.configurationCount_options);
    }
}