var setSession = (function(){
  var sessionValue = 1;
// Cache the DOM
  var sessionInput = document.getElementById('session-input');
  var incTime      = document.getElementById('session-increase');
  var decTime      = document.getElementById('session-decrease');
//  Bind click events
  incTime.addEventListener('click', _increment.bind());
  decTime.addEventListener('click', _decrement.bind());
// Render the initial value from sessionValue
  _render();

  function _render() {
    sessionInput.textContent = sessionValue.toString();
  }

  function _increment() {
    sessionValue === 360 ? '' : sessionValue++;
    _render();
  }

  function _decrement() {
    sessionValue === 1 ? '' : sessionValue--;
    _render();
  }

  function getValue () {
     return sessionValue;
  }

  return {
      getValue : getValue
  };

})();
