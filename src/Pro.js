import Vue from 'vue'
let Pro = Vue.extend({
    template: '<div>123123</div>',
    data() {
      return {
        text : '123123'
      }
    }
})
new Pro().$mount('#bpp')