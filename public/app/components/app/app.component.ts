import {Component} from "angular2/core";
import {VCFiveComponent} from "../../devices/vc-five/components/vc-five.component";
import {HeroList} from "../../devices/hero-sample/components/hero-list.component";
import {TCPersonalityDebuggerComponent} from "../tcframework/components/tc-personality-debugger.component";
import {TCPersonalityService} from "../tcframework/services/tc-personality.service";
import {DemoWiz1Service} from "../../devices/demowiz1/services/demowiz1.service";
import {provide} from "angular2/core";
import {DemoWiz2Service} from "../../devices/demowiz2/services/demowiz2.service";
import {DemoWiz1Component} from "../../devices/demowiz1/components/demowiz1.component";

/*
 Note: in the current implementation providers isn't required.  Rather than constructing
 a TCPersonalityDisplayerComponent that gets a TCPersonalityService injected, I switched
 to making TCPersonalityDisplayerComponent a base class that a personality class
 (e.g., "DemoWiz1Component") extends.  The subclass constructs the super class with
 an instance of the appropriate personality (e.g., "DemoWiz1Personality"), which
 eliminates the need for TCPersonalityService.

 The advantage of that approach is that it is the subclass that defines the HTML
 (e.g. "DemoWiz1Component.jade"), which frees the designer up to do whatever they
 want in the design of the web page for the specific personality.  That jade file
 then uses whatever components it needs, and can call helper functions on the base
 TCPersonalityDisplayerComponent class (e.g., "launchWizard").

 Note that TCPersonalityDebuggerComponent still uses the service injection
 architecture, though, so I'm leaving the providers metadata here.
*/
@Component({
    selector: "my-app",
    templateUrl: "app/components/app/app.component.html",
    directives: [VCFiveComponent, HeroList, TCPersonalityDebuggerComponent, DemoWiz1Component],
    providers: [provide(TCPersonalityService, {useClass:DemoWiz1Service})]
})

export class AppComponent {
}
