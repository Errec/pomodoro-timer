var setBreak = (function(){
  var breakValue = 5;
// Cache the DOM
  var breakInput = document.getElementById('break-input');
  var incTime    = document.getElementById('break-increase');
  var decTime    = document.getElementById('break-decrease');
//  Bind click events
  incTime.addEventListener('click', _increment);
  decTime.addEventListener('click', _decrement);
// Render the initial value from breakValue

  function _render() {
    breakValue === 5 ? breakInput.textContent = '05 min' : breakInput.textContent = breakValue.toString() + ' min';
  }

  function _increment() {
    breakValue === 60 ? '' : breakValue += 5;
    _render();
  }

  function _decrement() {
    breakValue === 5 ? '' : breakValue -= 5;
    _render();
  }

  function getValue () {
     return breakValue;
  }

  return {
      getValue : getValue
  };

})();
