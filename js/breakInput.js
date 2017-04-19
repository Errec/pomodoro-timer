var breakValue = {
    breakValue: 1,
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render(); //TODO
    },
    cacheDom: function () {
      this.breakInput = getElementById('break-input');
      this.incTime    = getElementById('break-increase');
      this.decTime    = getElementById('break-decrease');
    },
    bindEvents: function() {
      this.incTime.on('click', this.increment.bind(this)); //TODO
      this.decTime.on('click', this.decrement.bind(this)); //TODO
    }
};
