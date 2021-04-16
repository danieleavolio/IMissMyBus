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

var darkmode = false;

function changeMode() {
  if (!darkmode) {
    document.getElementsByClassName("aboutDisplayColor").item(0).style =
      "background-color: #181818;";
    document.getElementById("innerBody").style = "background-color: #181818;";
    document.getElementById("leftScreen").style = "background-color: #181818;";
    document.getElementById("rightScreen").style = "background-color: #181818;";

    nodeList = document.getElementsByClassName(
      "volume-control",
      "::-webkit-slider-thumb"
    );
    Array.from(nodeList).forEach((element) => {
      element.style = "background-color: rgb(255 172 108);";
    });

    document.body.style.backgroundColor = "#181818";
    nodelist = document.getElementsByClassName("textChange");

    for (let index = 0; index < nodelist.length; index++) {
      nodelist[index].style.color = "#ffd9bc";
    }
    darkmode = true;
  } else {
    document.getElementsByClassName("aboutDisplayColor").item(0).style =
      "background-color: #904949;";
    document.getElementById("innerBody").style = "background-color: #ffe8d6;";
    document.getElementById("leftScreen").style = "background-color: #ffe8d6;";
    document.getElementById("rightScreen").style = "background-color: #ffe8d6;";

    nodeList = document.getElementsByClassName(
      "volume-control",
      "::-webkit-slider-thumb"
    );
    Array.from(nodeList).forEach((element) => {
      element.style = "background-color: #db8080;";
    });

    document.body.style.backgroundColor = "#ffe8d6";
    nodelist = document.getElementsByClassName("textChange");

    for (let index = 0; index < nodelist.length; index++) {
      nodelist[index].style.color = "#db8080";
    }

    ulList = document.getElementById("rightScreen").getElementsByTagName("ul");
    icons = document.getElementsByClassName("material-icons");
    textInAbout = document.getElementById("aboutDisplay").getElementsByTagName("p");

    
    for (let index = 0; index < ulList.length; index++) {
        ulList[index].style.color = "#904949";
      }
    for (let index = 0; index < icons.length; index++) {
        icons[index].style.color="#904949";
    }
    for (let index = 0; index < textInAbout.length; index++) {
        textInAbout[index].style.color="white";
    }
    darkmode = false;
    
  }
}

function darkModeHandle() {
  document.getElementsByClassName("aboutDisplayColor").item(0).style =
    "background-color: #181818;";
  document.getElementById("innerBody").style = "background-color: #181818;";
  document.getElementById("leftScreen").style = "background-color: #181818;";
  document.getElementById("rightScreen").style = "background-color: #181818;";

  nodeList = document.getElementsByClassName(
    "volume-control",
    "::-webkit-slider-thumb"
  );
  Array.from(nodeList).forEach((element) => {
    element.style = "background-color: #ffd9bc;";
  });

  document.body.style.backgroundColor = "#181818";
  nodelist = document.getElementsByClassName("textChange");

  for (let index = 0; index < nodelist.length; index++) {
    nodelist[index].style.color = "#ffd9bc";
  }
}

function playbus() {
  if (!busPlaying) {
    bus.play();
    busPlaying = true;
  } else {
    bus.pause();
    busPlaying = false;
  }
}

function showModal() {
  if (!aboutPressed) {
    document.getElementById("aboutDisplay").style =
      "transform: translateY(30%);";
    aboutPressed = true;
  } else {
    document.getElementById("aboutDisplay").style =
      "transform: translateY(-1000px)";
    aboutPressed = false;
  }
}

function playWind() {
  if (!windPlaying) {
    wind.play();
    windPlaying = true;
  } else {
    wind.pause();
    windPlaying = false;
  }
}

function playRain() {
  if (!rainPlaying) {
    rain.play();
    rainPlaying = true;
  } else {
    rain.pause();
    rainPlaying = false;
  }
}

function playPeople() {
  if (!peoplePlaying) {
    people.play();
    peoplePlaying = true;
  } else {
    people.pause();
    peoplePlaying = false;
  }
}

function playRadio() {
  if (!radioPlaying) {
    radio.play();
    radioPlaying = true;
  } else {
    radio.pause();
    radioPlaying = false;
  }
}

//controllo del suono

let busVolume = document.querySelector("#busVC");
busVolume.addEventListener("change", function (e) {
  console.log("ciao");
  bus.volume = e.currentTarget.value / 100;
});

let rainVolume = document.querySelector("#rainVC");
rainVolume.addEventListener("change", function (e) {
  rain.volume = e.currentTarget.value / 100;
});

let windVolume = document.querySelector("#windVC");
windVolume.addEventListener("change", function (e) {
  wind.volume = e.currentTarget.value / 100;
});

let peopleVolume = document.querySelector("#peopleVC");
peopleVolume.addEventListener("change", function (e) {
  people.volume = e.currentTarget.value / 100;
});

let radioVolume = document.querySelector("#radioVC");
radioVolume.addEventListener("change", function (e) {
  radio.volume = e.currentTarget.value / 100;
});
