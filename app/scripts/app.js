window.onload = function() {
  console.log("JS Beat Machine ready.");


  // declare variables
  var e;
  var padboard = document.querySelector(".pads");
  var pad = document.querySelectorAll(".pad");



// createjs.Sound.addEventListener("fileload", handleFileLoad);
// createjs.Sound.alternateExtensions = ["mp3"];
// createjs.Sound.registerSounds(
//     [{id:"music1", src:"music.mp3"},
//     {id:"music2", src:"music2.mp3"}]
// , "assets/");
 
 
// function handleFileLoad(event) {
//     // A sound has been preloaded. This will fire TWICE
//     console.log("Preloaded:", event.id, event.src);
// }

  createjs.Sound.addEventListener("fileload", handleFileLoad);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds([
    {id: "btn113", src: "clap.wav"},
    {id: "btn119", src: "hihat.wav"},
    {id: "btn101", src: "kick.wav"},
    {id: "btn97", src: "openhat.wav"},
    {id: "btn115", src: "boom.wav"},
    {id: "btn100", src: "ride.wav"},
    {id: "btn122", src: "snare.wav"},
    {id: "btn120", src: "tom.wav"},
    {id: "btn90", src: "tink.wav"}
    ], "assets/sounds/");

  function handleFileLoad(event) {
    console.log("Preloaded: ", event.id, event.src);
  }





    // create a preloader to load the sounds.
  // var loader = new createjs.LoadQueue(false);
    // install the SoundJS Sound to preload audio.
  // loader.installPlugin(createjs.Sound);
    // add additional extension when .wav not supported.
  // createjs.Sound.alternateExtensions = ["mp3"];
    // when all sounds are loaded call the handleComplete function.
  // loader.on("complete", handleComplete, this);
    // provide a manifest of files and ids to be loaded.
  // loader.loadManifest([
  //   {id: 113, src: "assets/sounds/clap.wav"},
  //   {id: 119, src: "assets/sounds/hihat.wav"},
  //   {id: 101, src: "assets/sounds/kick.wav"},
  //   {id: 97, src: "assets/sounds/openhat.wav"},
  //   {id: 115, src: "assets/sounds/boom.wav"},
  //   {id: 100, src: "assets/sounds/ride.wav"},
  //   {id: 122, src: "assets/sounds/snare.wav"},
  //   {id: 120, src: "assets/sounds/tom.wav."},
  //   {id: 90, src: "assets/sounds/tink.wav"}
  //   ]);

  // function handleComplete() {
  //   console.log("All audio files have loaded.");
  //   createjs.Sound.play(loader.getResult(113));
  // }




 // function handleComplete() {
 //     createjs.Sound.play("sound");
 //     var image = queue.getResult("myImage");
 //     document.body.appendChild(image);
 // }


// createjs.Sound.alternateExtensions = ["mp3"];
//  createjs.Sound.on("fileload", this.loadHandler, this);
//  createjs.Sound.registerSound("path/to/mySound.ogg", "sound");
//  function loadHandler(event) {
//      // This is fired for each sound that is registered.
//      var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
//      instance.on("complete", this.handleComplete, this);
//      instance.volume = 0.5;
//  }







function soundLoaded(event) {
  //examples.hideDistractor();
  var div = document.getElementById(event.id);
  div.style.backgroundImage = "url('../_assets/art/audioButtonSheet.png')";
}

function stop() {
  if (preload !== null) {
    preload.close();
  }
  createjs.Sound.stop();
}

function playSound(target) {
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  var instance = createjs.Sound.play(target.id);
  if (instance === null || instance.playState == createjs.Sound.PLAY_FAILED) {
    return;
  }
  target.className = "gridBox active";
  instance.addEventListener("complete", function (instance) {
    target.className = "gridBox";
  });
}

// pad.addEventListener("keypress", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 113) {
//         console.log("Q pressed");
//     }
// });





// function searchKeyPress(e)
// {
//     // look for window.event in case event isn't passed in
//     e = e || window.event;
//     if (e.keyCode == 13)
//     {
//         document.getElementById('btnSearch').click();
//         return false;
//     }
//     return true;
// }





// document.getElementById("id_of_textbox")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("id_of_button").click();
//     }
// });




  // function removeTransition(e) {
  //   if (e.propertyName !== 'transform') return;
  //   e.target.classList.remove('playing');
  // }
  // function playSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   if (!audio) return;
  //   key.classList.add('playing');
  //   audio.currentTime = 0;
  //   audio.play();
  // }
  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // window.addEventListener('keydown', playSound);

};