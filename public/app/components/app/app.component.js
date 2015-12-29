System.register(["angular2/core", "../../devices/vc-five/components/vc-five.component", "../../devices/hero-sample/components/hero-list.component", "../tcframework/components/tc-personality-debugger.component", "../tcframework/services/tc-personality.service", "../../devices/demowiz1/services/demowiz1.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vc_five_component_1, hero_list_component_1, tc_personality_debugger_component_1, tc_personality_service_1, demowiz1_service_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (vc_five_component_1_1) {
                vc_five_component_1 = vc_five_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (tc_personality_debugger_component_1_1) {
                tc_personality_debugger_component_1 = tc_personality_debugger_component_1_1;
            },
            function (tc_personality_service_1_1) {
                tc_personality_service_1 = tc_personality_service_1_1;
            },
            function (demowiz1_service_1_1) {
                demowiz1_service_1 = demowiz1_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/components/app/app.component.html",
                        directives: [vc_five_component_1.VCFiveComponent, hero_list_component_1.HeroList, tc_personality_debugger_component_1.TCPersonalityDebuggerComponent],
                        providers: [core_2.provide(tc_personality_service_1.TCPersonalityService, { useClass: demowiz1_service_1.DemoWiz1Service })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map