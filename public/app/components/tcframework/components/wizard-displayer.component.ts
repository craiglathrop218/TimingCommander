import {OnInit} from "angular2/core";
import {OnChanges} from "angular2/core";
import {Component} from "angular2/core";
import {Wizard} from "../data/wizard";
import {SimpleChange} from "angular2/core";
@Component({
    selector: "wizard-displayer",
    templateUrl: "app/components/tcframework/components/wizard-displayer.component.html",
    inputs: ['wizard']
})
export class WizardDisplayerComponent { // implements OnChanges
    public wizard : Wizard;

    /*
    The OnChanges hook only appears to catch changes to properties of the Component.
    For example, it will trigger when this.wizard is set.  But it doesn't trigger
    when a data value bound to an HTML input (e.g., textbox) changes.  For example,
    changing element.data.value, which is ultimately a Data object that is owned by the
    TCPersonality object, doesn't trigger OnChange.
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        console.log("WizardDisplayerComponent::ngOnChanges");
        for (let propName in changes) {
            let prop = changes[propName];
            let cur = JSON.stringify(prop.currentValue)
            let prev = JSON.stringify(prop.previousValue); // first time is {}; after is integer
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    */
}