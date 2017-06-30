// declare variables
// var pad, pads;

// store reference to the array of the html button elements
var pad = Array.from(document.querySelectorAll("button"));

// loop throgh the pad array
for (var i = 0; i < pad.length; i++) {
	// add mouse event to each button
	pad[i].addEventListener("click", playSound);
}

// function playSound plays audio files on click event
function playSound(e) {

	// add CSS transition when the audio is playing
	e.currentTarget.classList.add('playing');

	// store clicked item's data-sound attribute in soundURL variable
	var soundURL = e.currentTarget.getAttribute("data-sound");

	// store reference to the audio element source matching the soundURL variable
	var audioElement = document.querySelector("audio[src='" + soundURL + "']");
	console.log(audioElement);

	// schedule the audio playback on 0
	audioElement.currentTime = 0;
	// begin a playback of the media stored in audioElement variable
	audioElement.play();
}

// trigger a function onKeyDown when the keyboard is clicked
window.addEventListener("keydown", onKeyDown);

// function onKeyDown plays audio files on keydown event
function onKeyDown(e) {

	// store a .code reference of pressed button (e) as a audioKeyCode variable
	var audioKeyCode = e.code;
	console.log(audioKeyCode);

	// store reference to the audio element source matching the audioKeyCode variable
	var audioSrc = document.querySelector("audio[data-key='" + audioKeyCode + "']");
	console.log(audioSrc);

	// schedule to audio playback on 0
	audioSrc.currentTime = 0;
	// begin a playback of the media elemement stored in audioSrc variable
	audioSrc.play();

	// add a CSS transition to pressed button
	var audioPad = document.querySelector("button[data-key='" + audioKeyCode + "']");
	audioPad.classList.add("playing");
}

// remove CSS animation if the audio is not playing
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

// trigger the CSS transition removal
pad.forEach(function(pad) {
	return pad.addEventListener('transitionend', removeTransition);
});




