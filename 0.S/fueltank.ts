export class Fueltank {
    private _fuel : number = 0;
    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly _FUEL_MILEAGE;

    constructor(fuel: number, FUEL_MILEAGE:number, MAXIMUM_FUEL_CAPACITY: number) {
        this._fuel = fuel;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;

    }
    set fuel(value :number) {
        this._fuel = value;
    }

    get fuel(): number {
        return this._fuel;
    }


    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get FUEL_MILEAGE() : number {
        return this._FUEL_MILEAGE;
    }
}