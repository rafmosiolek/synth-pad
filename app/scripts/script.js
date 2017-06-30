// declare variables
var pad, pads;


pad = document.querySelectorAll("button");

for (var i = 0; i < pad.length; i++) {
	pad[i].addEventListener("click", playSound);
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

function playSound(e) {

	e.currentTarget.classList.add('playing');
	var soundURL = e.currentTarget.getAttribute("data-sound");

	var audioElement = document.querySelector("audio[src='" + soundURL + "']");
	console.log(audioElement);

	audioElement.currentTime = 0;
	audioElement.play();
}

window.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {

	var audioKeyCode = e.code;
	console.log(audioKeyCode);

	var audioSrc = document.querySelector("audio[data-key='" + audioKeyCode + "']");
	console.log(audioSrc);

	audioSrc.currentTime = 0;
	audioSrc.play();

	var audioPad = document.querySelector("button[data-key='" + audioKeyCode + "']");
	audioPad.classList.add("playing");
}


pads = Array.from(document.querySelectorAll('#pads'));

pads.forEach(function(pad) {
	return pad.addEventListener('transitionend', removeTransition);
});




