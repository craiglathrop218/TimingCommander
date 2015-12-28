import {Wizard} from "./wizard";
import {TCPersonality} from "./tc-personality";
import {WizardScreen} from "./wizard-screen";
import {IDataChangeListener} from "../interfaces/idata-change-listener";
import {DataMetadata} from "./data-metadata";
export class WizardSection implements IDataChangeListener {
    constructor(public header: string, public status: string, public wizardScreenName: string, public sortOrder: int) {}

    isDisplayed : boolean = false;
    wizardScreen:WizardScreen;

    public toString() {
        return this.header + " [" + this.status + "] (screen: " + this.wizardScreenName + ")";
    }

    bind (personality:TCPersonality) {
        this.wizardScreen = personality.getScreen(this.wizardScreenName);
    }

    unbind(personality: TCPersonality) {
        this.undisplayed(personality);
    }


    // This is all part of my hacked-together architecture for handling change
    // notifications for the data object.  If there's a better way to do that, this can be removed.
    dataChanged(oldValue, newValue, metadata:DataMetadata):void {
        console.log(`WizardSection[${this.header}]::dataChanged. ${metadata.name}: newValue = ${newValue}`);
    }

    displayed(personality:TCPersonality) {
        personality.addDataChangeListener(this);
    }

    undisplayed(personality: TCPersonality) {
        personality.removeDataChangeListener(this);
    }

    public equals (rhs: WizardSection) {
        this.dbg(`${this.header} == ${rhs.header}? ${this.header == rhs.header}`)
        this.dbg(`${this.wizardScreenName} == ${rhs.wizardScreenName}? ${this.wizardScreenName == rhs.wizardScreenName}`)
        var res = this.header == rhs.header && this.wizardScreenName == rhs.wizardScreenName;
        this.dbg(`res: ${res}`)
        return res;
    }

    dbg(msg: string) {
        //console.log(msg);
    }
}