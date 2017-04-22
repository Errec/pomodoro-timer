var setBreak = (function(){
  var breakValue = 4;
// Cache the DOM
  var breakInput = document.getElementById('break-input');
  var incTime    = document.getElementById('break-increase');
  var decTime    = document.getElementById('break-decrease');
//  Bind click events
  incTime.addEventListener('click', _increment);
  decTime.addEventListener('click', _decrement);
// Render the initial value from breakValue
  _render();

  function _render() {
    breakInput.textContent = breakValue.toString();
  }

  function _increment() {
    breakValue === 60 ? '' : breakValue++;
    _render();
  }

  function _decrement() {
    breakValue === 1 ? '' : breakValue--;
    _render();
  }

  function getValue () {
     return breakValue;
  }

  return {
      getValue : getValue
  };

})();
