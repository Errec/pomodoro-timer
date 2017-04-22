var timer = (function() {
  var breakValue   = 5; //TODO: add listener or coupling
  var sessionValue = 25;  //TODO: add listener or coupling
// Cache the DOM
  var timerDisplay = document.getElementById('timer-display');
  var start        = document.getElementById('start-btn');
  var reset        = document.getElementById('reset-btn');
// Bind click events
  start.addEventListener('click', _startTimer.bind()); //TODO: _startTimer
  reset.addEventListener('click', _resetTimer.bind()); //TODO: _resetTimer
// Render the timer display
  _render();

  function _render() {
    timerDisplay.textContent = sessionValue.toString();
  }
})();
