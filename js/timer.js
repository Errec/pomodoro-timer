var timer = (function() {
  var displayValue = setSession.getValue();
  var playOn       = true;
  var myCountdown  = null;
  var loopTime     = null;
// Cache the DOM
  var timerDisplay = document.getElementById('timer-display');
  var start        = document.getElementById('start-btn');
  var reset        = document.getElementById('reset-btn');
// Bind click events
  start.addEventListener('click', _startCountdown);
  reset.addEventListener('click', _resetTimer);
// Render the timer display
  _render();

  function _render() {
    timerDisplay.textContent = displayValue.toString();
  }

  function _resetTimer() {
    start.disabled = false;
    playOn = false;
    clearTimeout(myCountdown);
    clearTimeout(loopTime);
    displayValue = setSession.getValue();
    _render();
  }

  function _startCountdown() {
    var sessionTime = setSession.getValue() + 1;
    var breakTime   = setBreak.getValue() + 1;
    playOn          = true;
    start.disabled = true;

    myCountdown = setInterval(function() {
      if(sessionTime > 0) {
      displayValue = --sessionTime;
      _render();
      }
      else if(sessionTime === 0) {
        if(breakTime > 0) {
        displayValue = --breakTime;
        _render();
        }
      }
    }, 1000);

    loopTime = setTimeout(function() {
      clearTimeout(myCountdown);
      if (playOn) {
         _startCountdown();
      } else {
        return;
      }
    },(sessionTime + breakTime + 1) * 1000);
  }

})();
