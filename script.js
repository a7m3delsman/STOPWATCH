let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let savedTimes = [];

function startTimer() {
  hideButton("start");
  nohideButton("stop");
nohideButton ("save");

nohideButton("reset")
  let startTime = new Date().getTime() - (seconds * 1000) - (minutes * 60 * 1000) - (hours * 60 * 60 * 1000);
  interval = setInterval(function() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    hours = Math.floor(elapsedTime / (60 * 60 * 1000));
    elapsedTime -= hours * 60 * 60 * 1000;
    minutes = Math.floor(elapsedTime / (60 * 1000));
    elapsedTime -= minutes * 60 * 1000;
    seconds = Math.floor(elapsedTime / 1000);
    elapsedTime -= seconds * 1000;
    milliseconds = elapsedTime;
	document.getElementById('start').disabled = true;
	audio.play();
    displayTime();
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
hideButton("stop");
nohideButton("start");
  document.getElementById('start').disabled = false;
}

function resetTimer() {
  hideButton ("reset");
  hideButton ("stop");
  hideButton ("save");
  nohideButton ("start");
  clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  savedTimes.length = 0;
  document.getElementById('start').disabled = false;

  document.getElementById("timer").innerHTML ="00:00:00";
  displaySavedTimes(); 
}

function saveTime() {
  let savedMilliseconds = milliseconds;
  let savedSeconds = seconds;
  let savedMinutes = minutes;
  let savedHours = hours;
  savedTimes.push({hours: savedHours, minutes: savedMinutes, seconds: savedSeconds, milliseconds: savedMilliseconds});
  displaySavedTimes();
}

function displayTime() {
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;
  document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec ;
}

function displaySavedTimes() {
  let savedTimesDiv = document.getElementById("saved");
  savedTimesDiv.innerHTML = "";
  for (let i = 0; i < savedTimes.length; i++) {
    let savedTime = savedTimes[i];
    let ms = savedTime.milliseconds < 10 ? "00" + savedTime.milliseconds : savedTime.milliseconds < 100 ? "0" + savedTime.milliseconds : savedTime.milliseconds;
    let sec = savedTime.seconds < 10 ? "0" + savedTime.seconds : savedTime.seconds;
    let min = savedTime.minutes < 10 ? "0" + savedTime.minutes : savedTime.minutes;
    let hr = savedTime.hours < 10 ? "0" + savedTime.hours : savedTime.hours;
    let savedTimeDiv = document.createElement("div");
	let x ;
	for (x=0; x<=i;x++){

	
	
	}
    savedTimeDiv.innerHTML =     x + " - " +hr + ":" + min + ":" + sec + "." + ms ;
    savedTimesDiv.appendChild(savedTimeDiv);
  }
}

var audio = new Audio('button-click.mp3');

var muteIcon = document.getElementById("mute-icon");

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    audio.muted = true;
    muteIcon.innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}
function updateTime() {
    var d = new Date();
    var n = d.toLocaleString();
    document.getElementById("datetime").innerHTML = n;
}
setInterval(updateTime, 1000);

window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    if (window.pageYOffset > 0) {
      body.classList.add("scroll");
    } else {
      body.classList.remove("scroll");
    }
  });
  window.addEventListener('scroll', function() {
    const element = document.querySelector('.element');
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
  
    if (position < screenPosition) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
  function hideButton(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
      button.style.display = "none";
    }
  }
  function nohideButton(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
      button.style.display = "block";
    }
  }
  
