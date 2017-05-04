var timeMarkers = (function(){
// Cache the DOM
  var mark0   = document.getElementById('time-mark-0');
  var mark1   = document.getElementById('time-mark-1');
  var mark2   = document.getElementById('time-mark-2');
  var mark3   = document.getElementById('time-mark-3');
  var mark4   = document.getElementById('time-mark-4');
  var incTime = document.getElementById('session-increase');
  var decTime = document.getElementById('session-decrease');

  incTime.addEventListener('click', _render);
  decTime.addEventListener('click', _render);

  function _render() {
    mark0.textContent = addZero(Math.floor(setSession.getValue() / 5 * 1)).toString() + ' min';
    mark1.textContent = addZero(Math.floor(setSession.getValue() / 5 * 2)).toString() + ' min';
    mark2.textContent = addZero(Math.floor(setSession.getValue() / 5 * 3)).toString() + ' min';
    mark3.textContent = addZero(Math.floor(setSession.getValue() / 5 * 4)).toString() + ' min';
    mark4.textContent = addZero(Math.floor(setSession.getValue() / 5 * 5)).toString() + ' min';
  }
})();
