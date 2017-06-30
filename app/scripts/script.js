// declare variables
var audio, pad, pads, audioData;

audio = document.querySelector("audio");
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

window.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {


	var audioKeyCode = e.code;
	console.log(audioKeyCode);

	var audioSrc = document.querySelector("audio[data-key='" + audioKeyCode + "']");
	console.log(audioSrc);

	audioSrc.classList.add('playing');
	audioSrc.currentTime = 0;
	audioSrc.play();



// 	var audioKey = document.querySelector("audio[data-key]");
// 	console.log(audioKey);

// 	if (audioKeyCode === audioKey.currentSrc) {
// 		audio.currentTime = 0;
// 		audio.play();
// 	}

}

// document.addEventListener('keydown', function(e) {
//     var soundId = sound[e.which || e.keyCode];

//     if (soundId) {
//         var elem = document.getElementById(soundId);

//         if ( elem.paused ) {
//             elem.play();
//         } else {
//             elem.pause();
//         }
//     } else {
//         console.log("key not mapped : code is", e.keyCode);
//     }
// });




pads = Array.from(document.querySelectorAll('#pads'));

pads.forEach(function(pad) {
	return pad.addEventListener('transitionend', removeTransition);
});

// window.addEventListener('keydown', playSound); 


