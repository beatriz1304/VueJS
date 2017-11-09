new Vue({
  el: '#exercise',
  data: {
    value: 0,
    timer: 1000
  },
  computed: {
    result: function() {
      return this.value != 37 ? 'not there yet' : 'done'
    }
  },
  watch: {
    result: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, vm.timer);
    }
  },
  methods: {
    changeTimer: function(event) {
      this.timer = event.target.value;
    }
  }
});
