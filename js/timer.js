var timer = (function() {
  var N_RECT                = 367;
  var playOn                = true;
  var mySessionCountdown    = null;
  var myBreakCountdown      = null;
  var myBreakInnerCountdown = null;
  var loopTimer             = null;
  var disable               = false;
// Cache the DOM
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

  function _render(id, type) {
    var rectangle = document.getElementById('rect' + id);
    var reg       = new RegExp('(^| )'+ 'rect-animate-color' +'($| )','g');

    type === 'session' ? rectangle.className += " rect-animate-color" : rectangle.className = rectangle.className.replace(reg,' ');
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
    var sessionTime     = setSession.getValue() + 1;
    var breakTime       = setBreak.getValue() + 1;
    var rectSessionTime = sessionTime / N_RECT;
    var rectBreakTime   =  breakTime / N_RECT;
    var s = 0;
    var b = 0;
    playOn              = true;

    if(!disable) {
    _disableBtns(true);
    }

    mySessionCountdown = setInterval(function() {
      if(s <= N_RECT) {
      _render(s,'session');
      s++;
      }
    }, rectSessionTime * 1000);

    myBreakCountdown = setTimeout(function () {
      myBreakInnerCountdown = setInterval(function() {
        if(b <= N_RECT) {
          _render(b,'break');
          b++;
        }
      }, rectBreakTime * 1000);
    }, sessionTime * 1000);

    loopTimer = setTimeout(function() {
      clearTimeout(mySessionCountdown);
      clearTimeout(myBreakCountdown);
      clearTimeout(myBreakInnerCountdown);
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
