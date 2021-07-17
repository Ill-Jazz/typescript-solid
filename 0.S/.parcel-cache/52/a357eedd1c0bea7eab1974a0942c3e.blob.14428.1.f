"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var musicplayer_1 = require("./musicplayer");
var musicPlayer = new musicplayer_1.MusicPlayer(0, 50);
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var audioElement = document.querySelector('#musicPlayer-music');
musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
setInterval(function () {
    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
