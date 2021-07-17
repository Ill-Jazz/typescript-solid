import {Fueltank} from "./fueltank";
import {MusicPlayer} from "./musicplayer";
import {Engine} from "./engine";

export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _musicPlayer:MusicPlayer;
    private _engine: Engine;
    private _fuelTank: Fueltank;
    private _miles: number = 0;

    constructor(musicPlayer: MusicPlayer, engine: Engine, fuelTank: Fueltank) {
        this._musicPlayer = musicPlayer;
        this._engine = engine;
        this._fuelTank = fuelTank;
    }

    get miles(): number {
        return this._miles;
    }
    get musicPlayer(): MusicPlayer{
        return this._musicPlayer;
    }

    get engine():Engine {
        return this._engine;
    }
    get fuelTank(): Fueltank {
        return this._fuelTank;
    }

    drive() {
        if (this._engine.engineStatus === false || this.fuelTank.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this.fuelTank.fuel -= 1;
        this._miles += this.fuelTank.FUEL_MILEAGE;
    }

}
