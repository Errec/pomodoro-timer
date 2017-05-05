var timer = (function() {
  var N_RECT                = 364;
  var playOn                = true;
  var mySessionCountdown    = null;
  var myBreakCountdown      = null;
  var myBreakInnerCountdown = null;
  var loopTimer             = null;
  var disable               = false;
  var playBtn               = true;
  var minute                = 60000;
// Cache the DOM
  var timerWrapper  = document.getElementById('timer-wrapper');
  var start         = document.getElementById('start-btn');
  var sessionIncBtn = document.getElementById('session-increase');
  var sessionDecBtn = document.getElementById('session-decrease');
  var breakIncBtn   = document.getElementById('break-increase');
  var breakDecBtn   = document.getElementById('break-decrease');
  var commitCount   = document.getElementById('commit-count');
  var headline      = document.getElementById('headline');
// Bind click events
  start.addEventListener('click', _countdownSwitch);
// Render the timer display

_updateNumberOfRectangles();

  function _updateNumberOfRectangles() {
    var d       = new Date();
    var weekDay = d.getDay();

    for (var i = 0; i < weekDay; i++) {
      var div = document.createElement("div");
      div.setAttribute("id", "rect" + (N_RECT + 1 + i) );
      div.className += " rect";
      timerWrapper.appendChild(div);
    }
    N_RECT = N_RECT + weekDay;
  }

  function _render(id, type) {
    var rectangle = document.getElementById('rect' + id);
    var reg       = new RegExp('(^| )'+ 'rect-animate-color' +'($| )','g');

    type === 'session' ? rectangle.className += " rect-animate-color" : rectangle.className = rectangle.className.replace(reg,' ');
  }

  function _countdownSwitch() {
    if(playBtn) {
      playBtn = false;
      start.style.backgroundImage = "url(../img/reload-icon.svg)";
      _startCountdown();
    } else {
      playBtn = true;
      start.style.backgroundImage = "url(../img/play-icon.svg)";
      _resetTimer();
    }
  }

  function _resetTimer() {
    _disableBtns(false);
    disable = false;
    playOn = false;
    clearTimeout(mySessionCountdown);
    clearTimeout(myBreakCountdown);
    clearTimeout(myBreakInnerCountdown);
    clearTimeout(loopTimer);
    clearTimeout(commitUpdate);
    commitCount.textContent = '0 contributions in the current session';
    displayValue = setSession.getValue();
    for (var i = 0; i <= N_RECT; i++) {
      _render(i,'reset');
    }
  }

  function _startCountdown() {
    var sessionTime     = setSession.getValue();
    var breakTime       = setBreak.getValue();
    var rectSessionTime = sessionTime / N_RECT;
    var rectBreakTime   = breakTime / N_RECT;
    var commitTime      = rectSessionTime / 4;
    var c               = 0;
    var s               = 0;
    var b               = 0;
    playOn              = true;

    if(!disable) {
    _disableBtns(true);
    }

    commitUpdate = setInterval(function() {
      commitCount.textContent = c.toString() + ' contributions in the current session';
      c++;
    }, commitTime * minute);

    mySessionCountdown = setInterval(function() {
      if(s <= N_RECT) {
        _render(s,'session');
        s++;
      }
    }, rectSessionTime * minute);

    myBreakCountdown = setTimeout(function () {
      clearTimeout(commitUpdate);
      commitCount.textContent = 'WARNING: the database server has gone away! Take a break...';
      myBreakInnerCountdown = setInterval(function() {
        if(b <= N_RECT) {
          _render(b,'break');
          b++;
        }
      }, rectBreakTime * minute);
    }, sessionTime * minute);

    loopTimer = setTimeout(function() {
      clearTimeout(mySessionCountdown);
      clearTimeout(myBreakCountdown);
      clearTimeout(myBreakInnerCountdown);
      clearTimeout(commitUpdate);
      if (playOn) {
         _startCountdown();
      } else {
        return;
      }
    },(sessionTime + breakTime) * minute);
  }

  function _disableBtns(disable) {
    if(disable === false) {
      sessionIncBtn.disabled = false;
      sessionIncBtn.style.backgroundColor = "#f7f9fa";
      sessionDecBtn.disabled = false;
      sessionDecBtn.style.backgroundColor = "#f7f9fa";
      breakIncBtn.disabled   = false;
      breakIncBtn.style.backgroundColor   = "#f7f9fa";
      breakDecBtn.disabled   = false;
      breakDecBtn.style.backgroundColor   = "#f7f9fa";
    } else {
      sessionIncBtn.disabled = true;
      sessionIncBtn.style.backgroundColor = "#BCBCBC";
      sessionDecBtn.disabled = true;
      sessionDecBtn.style.backgroundColor = "#BCBCBC";
      breakIncBtn.disabled   = true;
      breakIncBtn.style.backgroundColor   = "#BCBCBC";
      breakDecBtn.disabled   = true;
      breakDecBtn.style.backgroundColor   = "#BCBCBC";
    }
  }

})();
