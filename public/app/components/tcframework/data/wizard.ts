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
        // get the current list of sections.
        var list = this.getSections().sort((s1, s2) => s1.sortOrder - s2.sortOrder);

        // check to see if the list of sections is exactly the same.  This is a common
        // use case; the user is typing in a field, which triggers refreshSections, but the
        // sections don't actually change.  If we set this.sections, the focus will be removed
        // from the field the user is typing in.  The end result is that the user can only
        // type one character at a time.
        if (this.sections != undefined && this.sections.length == list.length) {
            var same = true;
            for (var i = 0; i < this.sections.length; i++) {
                if (!this.sections[i].equals(list[i])) {
                    same = false;
                    break;
                }
            }
            // nothing to do, so get out.
            if (same) return;
        }

        // unbind all previous sections.  We create new sections every time, so cleanup
        // the previous array first.
        if (this.sections != undefined && this.sections != null) {
            for (var i = 0; i < this.sections.length; i++) {
                this.sections[i].unbind(this._personality);
            }
        }

        // bind all of the new sections to the current personality.
        for (var i = 0; i < list.length; i++) {
            list[i].bind(this._personality);
        }

        // back up the previously selected item so we can try to make sure it stays expanded.
        var current = this.currentSection;

        // set sections property.  This will trigger the Angular binding.
        this.sections = list;

        // find the section to display.
        var newselected : WizardSection;
        if (current != null) {
            console.log(`previously selected: ${current}`)
            for (var i = 0; i < this.sections.length; i++) {
                if (current.equals(this.sections[i])) {
                    newselected = this.sections[i];
                    console.log(`found section to select: ${newselected}`)
                    break;
                }
            }
        }

        // display the correct section, or the first section if necessary.
        if (newselected == undefined)
            this.displayInitialSection();
        else
            this.onSelect(newselected);
    }

    refreshSectionsWithArrayMerge() {
        var curr = this.getSections().sort((s1, s2) => s1.sortOrder - s2.sortOrder);

        // arrays aren't like ObservableCollection in C#.  To trigger data bindings, just
        // need to replace the whole property.  So just call refreshSections, not this
        // function.  Leaving it in here so I keep a record of the code I wrote.
        if (this.sections == undefined || this.sections == null || this.sections.length == 0) {
            // just assign the member property.  There are no old sections, so the current
            // list can be used.
            console.log("setting current options verbatim")
            this.sections = curr;
        }
        else {
            // walk the arrays and insert/push as needed.
            var i: number = 0;
            console.log("walking the new list")
            for (; i < curr.length; i++) {
                if (i < this.sections.length) {
                    //console.log(`compare ${this.sections[i]} against ${curr[i]}`)
                    if (this.sections[i].equals(curr[i])) {
                        console.log(`@${i}: equal; continue [${curr[i]}]`);
                        continue;
                    }
                    // let's just insert at this location.  Lots of cases where
                    // that could be sub-optimal, but I'm not going to worry about that
                    // here.
                    console.log(`@${i}: !equal; inserting new item  [${curr[i]}]`);
                    this.sections.splice(i, 0, curr[i]);
                } else {
                    console.log(`@${i}: no more items in this.sections; pushing new item  [${curr[i]}]`);
                    this.sections.push(curr[i]);
                }
            }

            // Remove any excess elements.
            if (i < this.sections.length) {
                console.log(`@${i}: removing excess items (removing ${this.sections.length - i} @ ${i})`);
                this.sections.splice(i, this.sections.length - i);
            }
        }
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

    public toString() { return this.name + " (width: " + this.width + ")"; }

    displayInitialSection() {
        this.onSelect(this.sections[0]);
    }

    onSelect(section:WizardSection) {
        this.clearIsDisplayed();
        console.log(`displaying section: ${section}. wizardScreen: ${section.wizardScreen}`)
        section.isDisplayed = true;
        section.displayed(this._personality);
    }

    get currentSection() : WizardSection {
        if (this.sections == undefined) return null;
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

        // get the sections each time a data value changes.  Update the array if necessary.
        this.refreshSections();
    }
}
