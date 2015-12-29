import {Wizard} from "../data/wizard";
import {TCPersonality} from "../data/tc-personality";

// The intent is that this class will be the base class for a
// component that is specific to the personality. That component will
// use templateUrl to reference an HTML file that contains the
// Html for that specific personality.
export abstract class TCPersonalityDisplayerComponent {
    public selectedWizard:Wizard;

    constructor(public personality: TCPersonality) {}

    onSelect(wizard:Wizard) {
        if (this.selectedWizard != null)
            this.selectedWizard.unbind(this.personality);
        if (wizard == null) return;
        this.selectedWizard = wizard;
        wizard.bind(this.personality);
        wizard.displayInitialSection();
    }

    handleOnInit() {
        console.log(`handleOnInit: ${this.personality.getStartupWizard()}`);
        this.onSelect(this.personality.getStartupWizard());
    }

    public launchWizard(wizardName: string) {
        var wizard = this.personality.getWizard(wizardName);
        if (wizard == null)
            alert(`${wizardName} wizard not found.`);
        else
            this.onSelect(wizard);
    }
}
