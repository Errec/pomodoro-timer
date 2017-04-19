var breakValue = {
    breakValue: '1',
    init: function() {
      this.cacheDom();
      this.bindEvents(); //TODO
      this.render(); //TODO
    },
    cacheDom: function () {
      this.breakInput = getElementById('break-input');
      this.incTime    = getElementById('break-increase');
      this.decTime    = getElementById('break-decrease');
    }
};
