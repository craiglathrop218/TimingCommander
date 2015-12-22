export class WizardSection {
    header: string;
    status: string;
    wizardScreen: string;

    get tostring() {
        return this.header + " [" + this.status + "] (screen: " + this.wizardScreen + ")";
    }
}