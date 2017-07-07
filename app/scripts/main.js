var context = new (window.AudioContext || window.webkitAudioContext)();


var oscillator = context.createOscillator();

oscillator.type = "sine";
oscillator.frequency.value = 440;
oscillator.connect(context.destination);
oscillator.start();


var volume = context.createGain();
oscillator.connect(volume);
volume.connect(context.destination);

var atTheMoment = context.currentTime;
volume.gain.setValueAtTime(1, atTheMoment);
volume.gain.exponentialRampToValueAtTime(0.001, atTheMoment + 0.5);
oscillator.start(atTheMoment + 1);
oscillator.stop(atTheMoment + 3);



class Noise {

    constructor(context) {
        this.context = context;
    }

    init() {
        this.oscillator = this.context.createOscillator();
        this.gainThingy = this.context.createGain();

        this.oscillator.connect(this.gainThingy);
        this.gainThingy.connect(this.context.destination);
        this.oscillator.type = "sine";
    }

    play(value, time) {
        this.init();e

        this.oscillator.frequency.value = value;
        this.gainThingy.gain.setValueAtTime(1, this.context.atTheMoment);

        this.oscillator.start(time);
        this.stop(time);
    }

    stop(time) {
        this.gainThingy.gain.exponentialRampToValueAtTime(0.001, time + 1);
        this.oscillator.stop(time + 1);
    }
 
}

let secondContext = new(window.AudioContext || window.webkitAudioContext)();

let note = new Noise(secondContext);
let time = secondContext.currentTime;
note.play(261.63, now);
note.play(293.66, now + 0.5);
note.play(329.63, now + 1);
note.play(349.23, now + 1.5);
note.play(392.00, now + 2);
note.play(440.00, now + 2.5); 
note.play(493.88, now + 3);
note.play(523.25, now + 3.5);




