var setSession = (function(){
  var sessionValue = 5;
// Cache the DOM
  var sessionInput = document.getElementById('session-input');
  var incTime      = document.getElementById('session-increase');
  var decTime      = document.getElementById('session-decrease');
//  Bind click events
  incTime.addEventListener('click', _increment);
  decTime.addEventListener('click', _decrement);
// Render the initial value from sessionValue

  function _render() {
    sessionValue === 5 ? sessionInput.textContent = '05 min' : sessionInput.textContent = sessionValue.toString() + ' min';
  }

  function _increment() {
    sessionValue === 360 ? '' : sessionValue += 5;
    _render();
  }

  function _decrement() {
    sessionValue === 5 ? '' : sessionValue -= 5;
    _render();
  }

  function getValue () {
     return sessionValue;
  }

  return {
      getValue : getValue
  };

})();
