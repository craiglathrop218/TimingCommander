export class DataOption {
    constructor(public value, public display: string = null) {
        if (this.display == null) this.display = `${value}`;
    }

    public toString() {
        return this.display == this.value ? this.display : `${this.display} [${this.value}]`;
    }
}