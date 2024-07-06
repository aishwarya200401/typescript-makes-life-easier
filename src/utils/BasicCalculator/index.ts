export class Calculate {
    private _value: number = 0;
    constructor(initialValue: number = 0) {
        this._value = initialValue;
    }

    public add(value: number) {
        this._value += value;
        return this;
    }
    public subtract(value: number) {
        this._value -= value;
        return this;
    }
    public multiply(value: number) {
        this._value *= value;
        return this;
    }
    public divide(value: number) {
        this._value /= value;
        return this;
    }
    public isEquals(value: number) {
        return this._value === value;
    }
    public isNotEquals(value: number) {
        return this._value !== value;
    }
    public percentage(value: number) {
        this._value = (this._value / value) * 100;
        return this;
    }
    public get value() {
        return this._value;
    }
}

console.log(new Calculate(489).percentage(500));
