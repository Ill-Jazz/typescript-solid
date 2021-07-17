
export class MusicPlayer {
    private _musicLevel: number = 0;
    private _oldMusicLevel: number = 50;

    constructor(musicLevel: number, oldMusicLevel: number) {
        this._musicLevel = musicLevel;
        this._oldMusicLevel = oldMusicLevel;
    }

    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }
}