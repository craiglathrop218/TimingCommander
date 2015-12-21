System.register(["angular2/core", "../services/vc-five.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vc_five_service_1;
    var VCFiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vc_five_service_1_1) {
                vc_five_service_1 = vc_five_service_1_1;
            }],
        execute: function() {
            VCFiveComponent = (function () {
                function VCFiveComponent(_deviceService) {
                    this._deviceService = _deviceService;
                    this.submitted = false;
                    this.test = "";
                    this.getSettings();
                }
                VCFiveComponent.prototype.onSubmit = function () { this.submitted = true; };
                VCFiveComponent.prototype.getSettings = function () {
                    this.settings = this._deviceService.getSettings();
                    console.log(this.settings.configurationCount_options);
                };
                VCFiveComponent = __decorate([
                    core_1.Component({
                        selector: "vc-five",
                        templateUrl: "app/devices/vc-five/components/vc-five.component.html",
                        providers: [vc_five_service_1.VCFiveService]
                    }), 
                    __metadata('design:paramtypes', [vc_five_service_1.VCFiveService])
                ], VCFiveComponent);
                return VCFiveComponent;
            })();
            exports_1("VCFiveComponent", VCFiveComponent);
        }
    }
});
//# sourceMappingURL=vc-five.component.js.map