export interface Appliances {

    turnOn():void
    turnOff():void
    bake(_item: string): void
    _isOn: Boolean;
}