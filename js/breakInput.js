var setBreak = {
    breakValue: 1,
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function () {
      this.breakInput = getElementById('break-input');
      this.incTime    = getElementById('break-increase');
      this.decTime    = getElementById('break-decrease');
    },
    bindEvents: function() {
      this.incTime.on('click', this.increment.bind(this));
      this.decTime.on('click', this.decrement.bind(this));
    },
    render: function () {
      this.breakInput.textContent = breakValue.toString();
    },
    increment: function () {
      this.breakValue === 120 ? '' : this.breakValue++;
      render();
    },
    decrement: function () {
      this.breakValue === 1 ? '' : this.breakValue--;
      render();
    }
};
