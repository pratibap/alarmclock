$(document).ready(function() {
	currentTime();
});

function currentTime() {
	var t = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	document.getElementById("currenttime").innerHTML = t;
	setTimeout("currentTime()", 1000);
}

function formatTime(t) {
	var h24 = +t.substr(0, 2);
	var h12 = (h24 % 12) || 12;
	var ampm = h24 < 12 ? " AM" : " PM";
	t = h12 + t.substr(2, 3) + ampm;
	return t;
}

function showAlarm() {
	document.getElementById("alarmform").style.display = "block";
	document.getElementById("alarmbutton").style.display = "none";
}

function setAlarm() {
	var ai = document.getElementById("alarminput").value;
	document.getElementById("alarmtime").innerHTML = formatTime(ai);
	document.getElementById("alarmoff").style.display = "none";
	document.getElementById("alarmon").style.display = "block";
	startAlarm();
}

function startAlarm() {
	var	ct = new Date().toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"});
	var ai = formatTime(document.getElementById("alarminput").value);
	if (ct == ai) {
		playAlarm();
	}	
	setTimeout("startAlarm()", 1000);
}

function playAlarm() {
	var a = document.getElementById("alarmaudio");
	a.play()
}

function clearAlarm() {
	document.getElementById("alarminput").value = ""; 
	document.getElementById("alarmtime").innerHTML = "";
	document.getElementById("alarmon").style.display = "none";
	document.getElementById("alarmoff").style.display = "block";
}

function closeAlarm () {
	document.getElementById("alarmform").style.display = "none";
	document.getElementById("alarmbutton").style.display = "block";
}