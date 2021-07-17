"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fueltank = void 0;
var Fueltank = /** @class */ (function () {
    function Fueltank(fuel, FUEL_MILEAGE, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._fuel = fuel;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Fueltank.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    Fueltank.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(Fueltank.prototype, "FUEL_MILEAGE", {
        get: function () {
            return this._FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    return Fueltank;
}());
exports.Fueltank = Fueltank;
