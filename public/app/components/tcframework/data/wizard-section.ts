import {Wizard} from "./wizard";
import {TCPersonality} from "./tc-personality";
import {WizardScreen} from "./wizard-screen";
export class WizardSection {
    constructor(public header: string, public status: string, public wizardScreenName: string) {}

    isDisplayed : boolean = false;
    wizardScreen:WizardScreen;

    get tostring() {
        return this.header + " [" + this.status + "] (screen: " + this.wizardScreenName + ")";
    }

    bind (personality:TCPersonality) {
        this.wizardScreen = personality.getScreen(this.wizardScreenName);
    }
}