var setBreak = {
    breakValue: 1,
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function () {
      this.breakInput = document.getElementById('break-input');
      this.incTime    = document.getElementById('break-increase');
      this.decTime    = document.getElementById('break-decrease');
    },
    bindEvents: function() {
      this.incTime.addEventListener('click', this.increment.bind(this));
      this.decTime.addEventListener('click', this.decrement.bind(this));
    },
    render: function () {
      this.breakInput.textContent = this.breakValue.toString();
    },
    increment: function () {
      this.breakValue === 60 ? '' : this.breakValue++;
      this.render();
    },
    decrement: function () {
      this.breakValue === 1 ? '' : this.breakValue--;
      this.render();
    }
};

setBreak.init();
