// declare variables
var audio, pad, pads;

audio = document.querySelector("audio");
pad = document.querySelector("button");



window.addEventListener("keydown", playSound);
pad.addEventListener("click", playSound);



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



	pad.classList.add('playing');
	audio.currentTime = 0;
	audio.play(); 

}

pads = Array.from(document.querySelectorAll('#pads'));

pads.forEach(function(pad) {
	return pad.addEventListener('transitionend', removeTransition);
});

// window.addEventListener('keydown', playSound); 


