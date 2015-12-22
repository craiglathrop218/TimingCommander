import {WizardScreen} from "../../../components/tcframework/data/wizard-screen";
import {Wizard} from "../../../components/tcframework/data/wizard";
import {StartupWizard} from "../data/startup-wizard";
import {AdvancedWizard} from "../data/advanced-wizard";
import {WizardMain} from "../data/wizard-main";
import {WizardPath1} from "../data/wizard-path1";
import {WizardAdvanced} from "../data/wizard-advanced";
import {WizardAdvanced2} from "../data/wizard-advanced2";
import {DataMetadata} from "../../../components/tcframework/data/data-metadata";
import {DataTypes} from "../../../components/tcframework/data/data-types";
import {TCPersonality} from "../../../components/tcframework/data/tc-personality";

export class DemoWiz1Personality extends TCPersonality {
    constructor() { super("DemoWiz1"); }

    getWizardScreens():WizardScreen[] {
        return this._localWizardScreens;
    }

    getStartupWizard(): Wizard {
        return this._localStartupWizard;
    }

    private _localStartupWizard : Wizard = new StartupWizard();

    getWizards() : Wizard[] {
        return [
            this._localStartupWizard,
            new AdvancedWizard()
        ];
    }

    getDataFields():DataMetadata[] {
        return this._localDataFields;
    }

    private _localWizardScreens : WizardScreen[] = [
        new WizardMain(),
        new WizardPath1(),
        new WizardAdvanced(),
        new WizardAdvanced2()
    ]

    private _localDataFields : DataMetadata[] = [
        new DataMetadata("WizardPath", DataTypes.string, null, null),
        new DataMetadata("WizardField1", DataTypes.int, null, null),
        new DataMetadata("WizardField2", DataTypes.int, null, null),
        new DataMetadata("WizardField3", DataTypes.int, null, null),
        new DataMetadata("WizardAdvanced1", DataTypes.int, null, null),
        new DataMetadata("WizardAdvanced2", DataTypes.int, null, null),
    ]
}