import {Component} from 'angular2/core';
import {TCPersonalityService} from "../services/tc-personality.service";
import {provide} from "angular2/core";
import {Wizard} from "../data/wizard";
import {WizardSection} from "../data/wizard-section";
import {WizardDebugComponent} from "./wizard-debug.component";
import {WizardScreen} from "../data/wizard-screen";
import {WizardScreenDebugComponent} from "./wizard-screen-debug.component";
import {TCPersonality} from "../data/tc-personality";
import {WizardDisplayerComponent} from "./wizard-displayer.component";

@Component({
    selector: "tc-personality",
    templateUrl: "app/components/tcframework/components/tc-personality-displayer.component.html",
    directives: [WizardDebugComponent, WizardScreenDebugComponent, WizardDisplayerComponent],
})
export class TCPersonalityDisplayerComponent {
    public selectedWizard:Wizard;
    public selectedWizardScreen:WizardScreen;
    private _personality : TCPersonality;

    // This is going to have an instance of TCPersonalityService injected.
    constructor(private _tcpersonalityService : TCPersonalityService) {}

    get personality() : TCPersonality {
        if (this._personality == null) this._personality = this._tcpersonalityService.getPersonality();
        return this._personality;
    }

    onSelect(wizard:Wizard) {
        if (this.selectedWizard != null)
            this.selectedWizard.unbind(this.personality);
        this.selectedWizard = wizard;
        this.selectedWizardScreen = null;
        wizard.bind(this.personality);
        wizard.displayInitialSection();
    }

    onSelectScreen(wizardScreen:WizardScreen) {
        this.selectedWizard = null;
        this.selectedWizardScreen = wizardScreen;
    }
}