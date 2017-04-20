var setSession = {
    sessionValue: 1,
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function () {
      this.sessionInput = document.getElementById('session-input');
      this.incTime    = document.getElementById('session-increase');
      this.decTime    = document.getElementById('session-decrease');
    },
    bindEvents: function() {
      this.incTime.addEventListener('click', this.increment.bind(this));
      this.decTime.addEventListener('click', this.decrement.bind(this));
    },
    render: function() {
      this.sessionInput.textContent = this.sessionValue.toString();
    },
    increment: function() {
      this.sessionValue === 360 ? '' : this.sessionValue++;
      this.render();
    },
    decrement: function() {
      this.sessionValue === 1 ? '' : this.sessionValue--;
      this.render();
    }
};

setSession.init();
