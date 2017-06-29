// declare variables
var audio, pad, pads, audioData;

audio = document.querySelectorAll("audio");
pad = document.querySelectorAll("button");
audioData = document.querySelectorAll("audio[src]");

var padAudio = document.querySelectorAll("button[data-sound='sounds/kick.wav']");


// window.addEventListener("keydown", playSound);
// pad.addEventListener("click", playSound);

for (var i = 0; i < pad.length; i++) {

	pad[i].addEventListener("click", playSound);

}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

function playSound(e) {
	// var audio = document.querySelector('audio[data-key]');
	// var pad = document.querySelector('button[data-key]');



	// var audioData = audio.getAttribute("data-key");
	// var padData = audio.getAttribute("data-key");

	// if (!audio) return;


		e.currentTarget.classList.add('playing');
		var soundURL = e.currentTarget.getAttribute("data-sound");

		var audioElement = document.querySelector("audio[src='" + soundURL + "']");
		console.log(audioElement);




		audioElement.currentTime = 0;
		audioElement.play();

}

window.addEventListener("keydown", onKeyPress);

function onKeyPress(e) {
	var audioSrc = e.code;

	console.log(audioSrc);
}

// MDN code keyQ







pads = Array.from(document.querySelectorAll('#pads'));

pads.forEach(function(pad) {
	return pad.addEventListener('transitionend', removeTransition);
});

// window.addEventListener('keydown', playSound); 


