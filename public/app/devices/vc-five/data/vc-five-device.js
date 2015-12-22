/**
 * Created by IDT on 12/19/15.
 */
System.register([], function(exports_1) {
    var VcFiveDevice;
    return {
        setters:[],
        execute: function() {
            VcFiveDevice = (function () {
                function VcFiveDevice() {
                    // Settings and options
                    this.configurationCount_options = {
                        value: 0,
                        options: [1, 2, 3, 4],
                        limits: null };
                    this.i2cAddress_options = {
                        value: "",
                        options: ['Primary 0xD4', 'Secondary 0xD9'],
                        limits: null };
                    this.crystalLoadCap_options = {
                        value: 0,
                        options: [6, 7, 8, 9, 10, 11, 12],
                        limits: null };
                }
                return VcFiveDevice;
            })();
            exports_1("VcFiveDevice", VcFiveDevice);
        }
    }
});
//# sourceMappingURL=vc-five-device.js.map