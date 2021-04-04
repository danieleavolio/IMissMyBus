
let bus = document.getElementById("busAudio");
let rain = document.getElementById("rainAudio");
let wind = document.getElementById("windAudio");
let people = document.getElementById("peopleAudio");
let radio = document.getElementById("radioAudio");

let about = document.getElementById("about");

var busPlaying = false;
var rainPlaying = false;
var windPlaying = false;
var peoplePlaying = false;
var radioPlaying = false;
var aboutPressed = false;

function playbus(){
    if(!busPlaying){
        bus.play();
        busPlaying = true;
    }
    else{
        bus.pause();
        busPlaying = false;
    }
}


function showModal(){
    if (!aboutPressed){ 
        document.getElementById("aboutDisplay").style = "transform: translateY(50%);";
        aboutPressed = true;
    }
    else{
        document.getElementById("aboutDisplay").style = "transform: translateY(-1000px)";
        aboutPressed = false;
    }
}



function playWind(){
    if(!windPlaying){
        wind.play();
        windPlaying = true;
    }
    else{
        wind.pause();
        windPlaying = false;
    }
}

function playRain(){
    if(!rainPlaying){
        rain.play();
        rainPlaying = true;
    }
    else{
        rain.pause();
        rainPlaying = false;
    }
}

function playPeople(){
    if(!peoplePlaying){
        people.play();
        peoplePlaying = true;
    }
    else{
        people.pause();
        peoplePlaying = false;
    }
}

function playRadio(){
    if(!radioPlaying){
        radio.play();
        radioPlaying = true;
    }
    else{
        radio.pause();
        radioPlaying = false;
    }
}



//controllo del suono

let busVolume = document.querySelector("#busVC");
busVolume.addEventListener("change", function(e){
    console.log("ciao")
    bus.volume = e.currentTarget.value / 100;
})

let rainVolume = document.querySelector("#rainVC");
rainVolume.addEventListener("change", function(e){
    rain.volume = e.currentTarget.value / 100;
})

let windVolume = document.querySelector("#windVC");
windVolume.addEventListener("change", function(e){
    wind.volume = e.currentTarget.value / 100;
})

let peopleVolume = document.querySelector("#peopleVC");
peopleVolume.addEventListener("change", function(e){
    people.volume = e.currentTarget.value / 100;
})

let radioVolume = document.querySelector("#radioVC");
radioVolume.addEventListener("change", function(e){
    radio.volume = e.currentTarget.value / 100;
})

