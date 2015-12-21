System.register(['../data/vc-five-device', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var vc_five_device_1, core_1;
    var VCFiveService;
    return {
        setters:[
            function (vc_five_device_1_1) {
                vc_five_device_1 = vc_five_device_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VCFiveService = (function () {
                function VCFiveService() {
                }
                VCFiveService.prototype.getSettings = function () {
                    var dataclass = new vc_five_device_1.VcFiveDevice();
                    return dataclass;
                };
                VCFiveService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VCFiveService);
                return VCFiveService;
            })();
            exports_1("VCFiveService", VCFiveService);
        }
    }
});
//# sourceMappingURL=vc-five.service.js.map