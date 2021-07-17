import {Appliances} from "./Appliances";

export class Restaurant {
    private _name : string;
    private _appliances : Appliances;

    constructor(name : string, _appliances:Appliances) {
        this._name = name;
        this._appliances = _appliances;
    }

    public Cook(item : string) {
        this._appliances.turnOn();
        this._appliances.bake(item);
        this._appliances.turnOff();
    }
}
