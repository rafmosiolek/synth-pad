  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    var audio = document.querySelector('audio[data-key]');
    var pad = document.querySelector('button[data-key]');
    if (!audio) return;

    pad.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  var pads = Array.from(document.querySelectorAll('#pads'));
  pads.forEach(function(pad) {
    return pad.addEventListener('transitionend', removeTransition);
  });

  window.addEventListener('keydown', playSound);