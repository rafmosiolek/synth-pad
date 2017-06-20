window.onload = function() {
  console.log("JS Synth Pad is ready.");


  // declare variables
  var preloader, loader, target;

  // create a preloader to load the audio files
  loader = new createjs.LoadQueue(false);

  // when all sounds are loaded call the handleFileLoad function
  createjs.Sound.addEventListener("fileload", handleFileLoad);
  // add additional extenstion when .wav not supported
  createjs.Sound.alternateExtensions = ["mp3"];
  // provide a manifest of files and ids to be loaded
  createjs.Sound.registerSounds([
    {id: "btn81-Q", src: "clap.wav"},
    {id: "btn119-W", src: "hihat.wav"},
    {id: "btn101-E", src: "kick.wav"},
    {id: "btn97-A", src: "openhat.wav"},
    {id: "btn115-S", src: "boom.wav"},
    {id: "btn100-D", src: "ride.wav"},
    {id: "btn122-Z", src: "snare.wav"},
    {id: "btn120-X", src: "tom.wav"},
    {id: "btn90-C", src: "tink.wav"}
    ], "sounds/");

  function handleFileLoad(event) {
    // A sound has been preloaded. 
    // This will fire as many times as number of registered files
    console.log("Preloaded: ", event.id, event.src);
  }
  // add an event listener for when load is completed
  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); 

  function soundLoaded(event) {
    //examples.hideDistractor();
    var div = document.getElementById(event.id);
    console.log(event.id);
  }

 
  function stop() {
    if (preload !== null) {
      preload.close();
    }
    createjs.Sound.stop();
  }
  function playSound(target) {
    //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
    target = document.querySelectorAll("button");
    target.addEventListener("click");
    var instance = createjs.Sound.play(target.id);
    if (instance === null || instance.playState == createjs.Sound.PLAY_FAILED) {
      return;
    }
    target.className = "gridBox active";
    instance.addEventListener("complete", function (instance) {
      target.className = "gridBox";
    });
  }


};