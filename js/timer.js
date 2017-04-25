var timer = (function() {
  var displayValue = setSession.getValue();
  var playOn       = true;
  var myCountdown  = null;
  var loopTimer    = null;
  var disable      = false;
// Cache the DOM
  var timerDisplay  = document.getElementById('timer-display');
  var start         = document.getElementById('start-btn');
  var reset         = document.getElementById('reset-btn');
  var sessionIncBtn = document.getElementById('session-increase');
  var sessionDecBtn = document.getElementById('session-decrease');
  var breakIncBtn   = document.getElementById('break-increase');
  var breakDecBtn   = document.getElementById('break-decrease');
// Bind click events
  start.addEventListener('click', _startCountdown);
  reset.addEventListener('click', _resetTimer);
// Render the timer display
  _render();

  function _render() {
    timerDisplay.textContent = displayValue.toString();
  }

  function _resetTimer() {
    _disableBtns(false);
    disable = false;
    playOn = false;
    clearTimeout(myCountdown);
    clearTimeout(loopTimer);
    displayValue = setSession.getValue();
    _render();
  }

  function _startCountdown() {
    var sessionTime = setSession.getValue() + 1;
    var breakTime   = setBreak.getValue() + 1;
    playOn          = true;
    if(!disable) {
    _disableBtns(true);
    }

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

    loopTimer = setTimeout(function() {
      clearTimeout(myCountdown);
      if (playOn) {
         _startCountdown();
      } else {
        return;
      }
    },(sessionTime + breakTime + 1) * 1000);
  }

  function _disableBtns(disable) {
    if(disable === false) {
      start.disabled         = false;
      sessionIncBtn.disabled = false;
      sessionDecBtn.disabled = false;
      breakIncBtn.disabled   = false;
      breakDecBtn.disabled   = false;
    } else {
      start.disabled         = true;
      sessionIncBtn.disabled = true;
      sessionDecBtn.disabled = true;
      breakIncBtn.disabled   = true;
      breakDecBtn.disabled   = true;
    }
  }

})();
