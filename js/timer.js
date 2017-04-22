var timer = (function() {
  var breakValue   = 5; //TODO: add listener or coupling
  var sessionValue = 25;  //TODO: add listener or coupling
// Cache the DOM
  var timerDisplay = document.getElementById('timer-display');
  var start        = document.getElementById('start-btn');
  var reset        = document.getElementById('reset-btn');
// Bind click events
  start.addEventListener('click', _startTimer.bind());
  reset.addEventListener('click', _resetTimer.bind());
})();
