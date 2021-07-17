"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var musicplayer_1 = require("./musicplayer");
var engine_1 = require("./engine");
var fueltank_1 = require("./fueltank");
var car_1 = require("./car");
var musicToggleElement = document.querySelector("#music-toggle");
var musicSliderElement = (document.querySelector("#music-slider"));
var audioElement = document.querySelector("#car-music");
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var defaultFuel = 0;
var defaultFuelMileage = 10;
var defaultFuelMaxCapacity = 100;
var musicPlayer = new musicplayer_1.MusicPlayer(0, 50);
var engine = new engine_1.Engine(false);
var fuelTank = new fueltank_1.Fueltank(defaultFuel, defaultFuelMileage, defaultFuelMaxCapacity);
var car = new car_1.Car(musicPlayer, engine, fuelTank);
musicToggleElement.addEventListener("click", function () {
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = "Turn music off";
        return;
    }
    musicToggleElement.innerText = "Turn music on";
    car.musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener("input", function (event) {
    var target = event.target;
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel
        ? "Turn music off"
        : "Turn music on";
});
engineToggleElement.addEventListener('click', function () {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.fuelTank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuelTank.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuelTank.fuel.toString();
    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
