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
  start.addEventListener('click', _runDisplay);
  reset.addEventListener('click', _resetTimer); //TODO: _resetTimer
// Render the timer display
  _render();

  function _render() {
    timerDisplay.textContent = displayValue.toString();
  }

  function _resetTimer() {
    playOn = false;
    clearTimeout(myCountdown);
    clearTimeout(loopTime);
    displayValue = setSession.getValue();
    _render();
  }

  function _runDisplay() {
    var sessionTime = setSession.getValue() + 1;
    var breakTime   = setBreak.getValue() + 1;
    playOn          = true;

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
         _runDisplay();
      } else {
        return;
      }
    },(sessionTime + breakTime) * 1000);
  }

})();
