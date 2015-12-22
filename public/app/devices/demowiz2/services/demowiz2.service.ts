import {TCPersonalityService} from "../../../components/tcframework/services/tc-personality.service";
import {Injectable} from "angular2/core";

@Injectable()
export class DemoWiz2Service extends TCPersonalityService {
    getWizardScreens():WizardScreen[] {
        return undefined;
    }

    startupWizard():Wizard {
        return undefined;
    }

    wizards():Wizard[] {
        return undefined;
    }
    constructor() { super("DemoWiz2"); }
}