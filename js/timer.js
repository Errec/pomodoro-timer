var timer = (function() {
  var displayValue = setSession.getValue();
  var playOn       = true;
// Cache the DOM
  var timerDisplay = document.getElementById('timer-display');
  var start        = document.getElementById('start-btn');
  var reset        = document.getElementById('reset-btn');
// Bind click events
  start.addEventListener('click', _runDisplay); //TODO: _startTimer
  reset.addEventListener('click', _resetTimer); //TODO: _resetTimer
// Render the timer display
  _render();

  function _render() {
    timerDisplay.textContent = displayValue.toString();
  }

  function _resetTimer() {
    return;
  }

  function _runDisplay() {
    var sessionTime = setSession.getValue() + 1;
    var breakTime   = setBreak.getValue() + 1;

    var myCountdown = setInterval(function() {
      if (sessionTime > 0) {
      displayValue = --sessionTime;
      _render();
      }
      else if (sessionTime === 0) {
        if (breakTime > 0) {
        displayValue = --breakTime;
        _render();
        }
      }
    }, 1000);

    setTimeout(function (argument) {
      clearTimeout(myCountdown);
      if (playOn) {
         _runDisplay();
      } else {
        return;
      }
    },(sessionTime + breakTime) * 1000);
  }

})();
