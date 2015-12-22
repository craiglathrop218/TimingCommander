/**
 * Created by IDT on 12/19/15.
 */

export class VcFiveDevice {
    // Selection storage
    public id:number; // Might not use this

    // Settings and options
    public configurationCount_options = {
        value:0,
        options:[1,2,3,4],
        limits:null};

    public i2cAddress_options = {
        value:"",
        options:['Primary 0xD4', 'Secondary 0xD9'],
        limits:null};

    public crystalLoadCap_options = {
        value:0,
        options:[6,7,8,9,10,11,12],
        limits:null};
}