"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, _appliances) {
        this._name = name;
        this._appliances = _appliances;
    }
    Restaurant.prototype.Cook = function (item) {
        this._appliances.turnOn();
        this._appliances.bake(item);
        this._appliances.turnOff();
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
