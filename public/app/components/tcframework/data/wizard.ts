import {Injectable} from "angular2/core";
import {WizardSection} from "./wizard-section";
import {TCPersonality} from "./tc-personality";
import {IDataChangeListener} from "../interfaces/idata-change-listener";
import {DataMetadata} from "./data-metadata";
@Injectable()
export abstract class Wizard implements IDataChangeListener {
    constructor(public name:string, public width:number, public height:number) {}

    get widthstr() : string { return this.width + "px"; }
    get heightstr() : string { return this.height + "px"; }

    public sections : WizardSection[];

    refreshSections() {
        this.sections = this.getSections().sort((s1, s2) => s1.sortOrder - s2.sortOrder);
    }

    clearIsDisplayed() {
        console.log("clearing all isDisplayed");
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i].isDisplayed) {
                this.sections[i].undisplayed(this._personality);
                this.sections[i].isDisplayed = false;
            }
        }
    }

    abstract getSections() : WizardSection[];

    tostring() { return this.name + " (width: " + this.width + ")"; }

    displayInitialSection() {
        this.clearIsDisplayed();
        this.sections[0].isDisplayed = true;
    }

    onSelect(section:WizardSection) {
        this.clearIsDisplayed();
        section.isDisplayed = true;
        section.displayed(this._personality)
    }

    get currentSection() : WizardSection {
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections[i].isDisplayed) return this.sections[i];
        }
        return null;
    }

    _personality : TCPersonality;

    bind (personality:TCPersonality) {
        this._personality = personality;
        this.refreshSections();
        personality.addDataChangeListener(this);
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].bind(personality);
        }
    }

    unbind(personality: TCPersonality) {
        if (this._personality == null) return;
        this._personality.removeDataChangeListener(this);
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].unbind(personality);
        }
        this._personality = null;
    }



    // This is all part of my hacked-together architecture for handling change
    // notifications for the data object.  If there's a better way to do that, this can be removed.
    dataChanged(oldValue, newValue, metadata:DataMetadata):void {
        console.log(`Wizard[${this.name}]::dataChanged. ${metadata.name}: newValue = ${newValue}`);
    }
}
