new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	alert: function() {
          	alert('Button was clicked!')
          },
          storeValue: function() {
          	this.value = event.target.value;
          },
          updateValue: function() {
          	this.value = event.target.value;
          }
        }
    });
