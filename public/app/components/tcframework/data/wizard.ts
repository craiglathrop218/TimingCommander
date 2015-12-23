import {Injectable} from "angular2/core";
import {WizardSection} from "./wizard-section";
import {TCPersonality} from "./tc-personality";
@Injectable()
export abstract class Wizard {
    constructor(public name:string, public width:number, public height:number) {}

    private _sections : WizardSection[];

    get widthstr() : string { return this.width + "px"; }
    get heightstr() : string { return this.height + "px"; }

    get sections() : WizardSection[] {
        if (this._sections == null) this._sections = this.getSections();
        return this._sections;
    }

    clearIsDisplayed() {
        console.log("clearing all isDisplayed");
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].isDisplayed = false;
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
    }

    bind (personality:TCPersonality) {
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].bind(personality);
        }
    }
}
